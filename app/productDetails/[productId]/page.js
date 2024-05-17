'use client'
import React, {useEffect, useState} from 'react';
import productApis from '../../_utils/api/productApis.jsx'
import BreadCrumbs from "@/app/_components/breadCrumbs/BreadCrumps";
import ProductBanner from "@/app/productDetails/_productDetails/productBanner";
import ProductInfo from "@/app/productDetails/_productDetails/ProductInfo";
import ProductList from "@/app/_components/productList/ProductList";
import {BounceLoader} from "react-spinners";
import {usePathname} from "next/navigation";


const ProductDetails = ({params}) => {
    const [singleProduct, setSingleProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const path = usePathname()
    useEffect(() => {
        const getProductById_ = async () => {
            await productApis.getProductById(params?.productId).then(
                res => {
                    console.log('att', res?.data?.data)
                    setSingleProduct(res?.data?.data)
                    getProductsListByCategory_(res.data.data)
                    setLoading(false)
                }
            )
        }
        getProductById_()
        console.log(path)
    }, [params?.productId]);
    const getProductsListByCategory_ = async (product) => {
        await productApis.getProductsByCategory(product?.attributes.category).then(
            res => {
                console.log('categories', res.data.data)
                setSimilarProducts(res.data.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    return (
        <>
            {loading ? <div className={`w-full h-screen flex items-center justify-center`}>
                    <BounceLoader
                        color="#36d7b7"
                        loading={loading}
                    />
                </div>
                : <div className={`px-10 md:px-20 py-12`}>
                    <BreadCrumbs product={singleProduct} path={path}/>
                    {<div className={`flex flex-col md:flex-row md:gap-7 mt-10`}>
                        <ProductBanner product={singleProduct}/>
                        <ProductInfo product={singleProduct}/>
                    </div>}
                    <div className={`mt-[4rem] md:mt-[8rem]`}>
                        <h2 className={`text-whiteText text-2xl mb-7`}>
                            Similar Products
                        </h2>
                        <ProductList productList={similarProducts}/>
                    </div>
                </div>}
        </>
    );
};

export default ProductDetails;