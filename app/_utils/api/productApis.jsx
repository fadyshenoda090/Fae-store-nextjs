import axiosInstance from "../axiosConfig/axiosInstance"
const getLatestProducts = ()=>axiosInstance.get(
    '/products?populate=*'
)
const getProductById= (id)=> axiosInstance.get(`/products/${id}?populate=*`)

const getProductsByCategory = (category)=>{
    return axiosInstance.get(`/products?filters[category][$eq]=${category}&populate=*`)
}

export default {
    getLatestProducts,
    getProductById,
    getProductsByCategory,
}