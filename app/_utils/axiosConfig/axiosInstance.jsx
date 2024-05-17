import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY

const axiosInstance = axios.create({
    baseURL: "http://localhost:1337/api",
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
});

export default axiosInstance;