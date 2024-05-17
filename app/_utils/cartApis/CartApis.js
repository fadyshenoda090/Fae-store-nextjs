import axiosInstance from "@/app/_utils/axiosConfig/axiosInstance";

const addToCart =(payload)=> axiosInstance.post(`/carts`,payload)


const cartItems =(email)=> axiosInstance.get(`
/carts?populate[products][populate]=coverImg&filters[email][$eq]=${email}
`)

const deleteItem =(id)=>axiosInstance.delete(`/carts/${id}`)

export default {
    addToCart,
    cartItems,
    deleteItem
};