import axios from "axios"

const BASE_URL = "https://shopvistabackend-1.onrender.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzdjYjhlYzg2ZWFiNmJkNDU0NDdiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODY5NDk4MSwiZXhwIjoxNzA4OTU0MTgxfQ.ushdBGZn0v2d6G49CrkLgKOYahK_ppUZ9P9VxKcIFW4"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})