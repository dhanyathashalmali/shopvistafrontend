import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                // Log the category being requested
                // console.log("Category being requested:", cat);

                // Formulate the request URL and log it
                const requestUrl = cat
                    ? `http://localhost:3000/api/products?categories=${cat}`
                    : "http://localhost:3000/api/products";
                // console.log("Requesting URL:", requestUrl);

                // Make the request
                const res = await axios.get(requestUrl);

                // Log the response data
                // console.log("Response data:", res.data);

                setProducts(res.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };
        getProducts();
    }, [cat]); // Make sure to include any other dependencies here

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)))
        )
    }, [products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        } else if (sort === "asc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);


    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    );
};

export default Products;
