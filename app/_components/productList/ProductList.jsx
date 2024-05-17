import React from 'react'
import ProductCard from "@/app/_components/productCard/ProductCard";
import {BounceLoader} from "react-spinners";

function ProductList({productList, loading}) {
    return (
        <>
            {loading ? <BounceLoader
                color="#36d7b7"
                loading={loading}
            /> : <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-5`}>
                {productList.map((item, index) => (
                    <div key={index}>
                        <ProductCard product={item} loader={loading}/>
                    </div>
                ))}
            </div>}
        </>
    )
}

export default ProductList