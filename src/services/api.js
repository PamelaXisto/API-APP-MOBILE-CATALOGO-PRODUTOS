import axios from "axios";

// https://dummyjson.com/products/category/{categoria}

const api = axios.create({
    baseURL: "https://dummyjson.com/"
});

export default api;
