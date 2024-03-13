import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes, // Import Routes instead of Switch
  Route,
  Navigate
} from 'react-router-dom';
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;