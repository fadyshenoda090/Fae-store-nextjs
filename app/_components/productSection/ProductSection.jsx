'use client'
import React, {useEffect, useState} from 'react'
import ProductList from '../productList/ProductList'
import productApis from '../../_utils/api/productApis.jsx'
import {BounceLoader} from "react-spinners";

function ProductSection() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getLatestProducts_ = () => {
            productApis.getLatestProducts().then(
                res => {
                    setProductList(res.data.data)
                    setLoading(!loading)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }
        getLatestProducts_()
    }, []);
    return (
        <>
            {loading ? <div className={`w-full h-[10rem] flex items-center justify-center`}>
                <BounceLoader
                color="#36d7b7"
                loading={loading}
            />
            </div> : <div className={`px-[8%] md:px20`}>
                <h2 className={`mb-5 text-2xl text-mintText `}>Our Latest Products</h2>
                <ProductList productList={productList} loader={loading}/>
            </div>}
        </>
    )
}

export default ProductSection