import React, {useContext} from 'react';
import {FaShoppingBag} from "react-icons/fa";
import {LuBadgeCheck} from "react-icons/lu";
import {FiAlertOctagon} from "react-icons/fi";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import cartApis from "@/app/_utils/cartApis/CartApis";
import {cartContext} from "@/app/_contexts/cartContext";

function ProductInfo({product}) {
    const {user} = useUser()
    const {cart, setCart} = useContext(cartContext)
    const router = useRouter()
    const goLogIn = ()=>{
    console.log(user)
        if(!user){
            router.push(`/sign-in`)
        }else{
            const data ={
                data: {
                    userNAme: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    products:[product?.id]
                }
            }
            cartApis.addToCart(data).then(
                res =>{
                    console.log(res)
                    setCart(oldCart=>[
                        ...oldCart,
                        {
                            id: res.data.data.id,
                            product,
                        }
                    ])
                }
            ).catch(
                err =>{
                    console.log(err)
                }
            )
        }
    }
    return (
        <div className={`mt-5 md:mt-0`}>
             <h2 className={`text-lg`}>
                 {product?.attributes?.title}
             </h2>
            <h2 className={`text-sm text-mintText mt-2`}>
                {product?.attributes?.category}
            </h2>
            <p className={`text-sm mt-5`}>
                {product?.attributes?.description}
            </p>
            <p className={`my-3 text-xl text-gray-400 capitalize flex items-center gap-3`}>
                {product?.attributes?.instantDelivery ? <LuBadgeCheck className={`text-mintText text-2xl`}/>: <FiAlertOctagon className={`text-warningText text-2xl`}/>}
                {product?.attributes?.instantDelivery ? 'eligible for instant delivery' : 'not eligible for instant delivery'}
            </p>
            <p className={`mt-2 text-3xl text-mintText`}>
                {product?.attributes?.price} $
            </p>
            <button onClick={()=>{goLogIn() }} className={`mt-5 flex items-center gap-2 text-xl px-5 py-1 rounded-[20px] bg-mintBg text-darkText hover:scale-105
            duration-200 transition-all ease-in-out`}>
                Add to Cart <FaShoppingBag />
            </button>
        </div>
    );
}

export default ProductInfo;