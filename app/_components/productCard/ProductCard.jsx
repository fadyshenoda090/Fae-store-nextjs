import React, {useState} from 'react';
import Image from "next/image";
import {CiBoxList} from "react-icons/ci";
import {useRouter} from "next/navigation";
import {BounceLoader} from "react-spinners";

function ProductCard({product, loader}) {
    const router = useRouter()
    return (
        <>
            {loader ? <div className={`w-full h-[15rem] flex items-center justify-center`}>
                <BounceLoader
                    color="#69DA6AFF"
                    loading={loading}
                />
            </div> : <div
                onClick={() => {
                    router.push(`/productDetails/${product?.id}`)
                }}
                className={`cursor-pointer bg-lighterBg p-1 h-[25rem] rounded-lg relative hover:shadow-[#69DA6AFF] hover:shadow-md
         hover:scale-105 transition-all duration-500 ease-in-out`}>
                <Image
                    loading={`lazy`}
                    src={product?.attributes?.coverImg?.data?.attributes?.url}
                    alt={`${product?.attributes?.coverImg?.data?.attributes?.alternativeText}`}
                    width={500}
                    height={500}
                    className={`rounded-t-lg h-[20rem] w-[100%] object-fill`}
                />
                <div className={`pt-2`}>
                    <h2 className={`select-none text-sm font-medium pl-2 line-clamp-1 text-ellipsis`}>
                        {product?.attributes?.title}
                    </h2>
                    <div className={`flex justify-between items-center`}>
                        <p className="text-sm text-mintText mt-1 select-none flex items-center gap-1">
                            <CiBoxList className={`text-lg text-mintText`}/> {product.attributes.category}
                        </p>
                        <p>
                            {product?.attributes?.price} $
                        </p>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default ProductCard;