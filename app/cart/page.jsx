'use client'
import React, {useContext, useEffect, useState} from 'react';
import {cartContext} from "@/app/_contexts/cartContext";
import {FaTrash} from "react-icons/fa";
import Image from "next/image";
import {LuBadgeCheck} from "react-icons/lu";
import {FiAlertOctagon} from "react-icons/fi";
import Link from "next/link";
import cartApis from "@/app/_utils/cartApis/CartApis";

const Cart = () => {
    const {cart, setCart} = useContext(cartContext)
    const [clicked, setClicked] = useState(false)
    const [price, setPrice] = useState(0)
    const calcTotal = (cart) => {
        const total = cart?.reduce((sum, item) => {
            const productPrice = item?.attributes?.products?.data[0]?.attributes?.price || 0;
            return sum + productPrice;
        }, 0);
        setPrice(total);
    };

    const deletPrd = (id) => {
        cartApis.deleteItem(id).then(
            res=>{
                console.log('deleted', res)
                setCart(cart.filter(item => item.id !== id))
            }
        ).catch(
            err=>{
                console.log(err)
            }
        )
    }

    useEffect(() => {
        calcTotal(cart);
    }, [cart]);


    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold text-whiteText sm:text-3xl">Your Cart</h1>
                        </header>
                        <div className="mt-8">

                            {cart?.length > 0 ?
                                <ul className="space-y-4">
                                    {cart?.map((item, index) => (
                                        <li className="flex items-center gap-4" key={index}>
                                            <Image
                                                loading={"lazy"}
                                                src={item?.attributes?.products?.data[0]?.attributes?.coverImg?.data?.attributes?.url}
                                                alt="Cart Item"
                                                className="size-36 rounded object-fill"
                                                width={150}
                                                height={150}
                                            />

                                            <div>
                                                <h3 className={`text-xl text-whiteText ${clicked ? 'overflow-visible whitespace-normal line-clamp-none' : 'line-clamp-1 text-ellipsis'} w-full`}>
                                                    {item?.attributes?.products?.data[0]?.attributes?.title}
                                                </h3>

                                                <dl className="mt-0.5 space-y-px text-lg text-mintText">
                                                    <div className={`flex items-center gap-2`}>
                                                        <dt>category:</dt>
                                                        <dd>{item?.attributes?.products?.data[0]?.attributes?.category}</dd>
                                                    </div>
                                                    <div className={`flex items-center gap-2`}>
                                                        <dt>Price:</dt>
                                                        <dd>{item?.attributes?.products?.data[0]?.attributes?.price}</dd>
                                                    </div>
                                                    <div className={`flex items-center gap-1 text-[0.8rem] font-bold`}>
                                                        <p className={`my-3 text-xl text-gray-400 capitalize flex items-center gap-3`}>
                                                            {item?.attributes?.instantDelivery ?
                                                                <LuBadgeCheck className={`text-mintText text-2xl`}/> :
                                                                <FiAlertOctagon
                                                                    className={`text-warningText text-2xl`}/>}
                                                            {item?.attributes?.instantDelivery ? 'eligible for instant delivery' : 'not eligible for instant delivery'}
                                                        </p>
                                                    </div>
                                                </dl>
                                            </div>

                                            <div className="flex flex-1 items-center justify-end gap-2">

                                                <button className="text-textDanger">
                                                    <FaTrash className={`text-lg md:text-2xl lg:ext-3xl`}
                                                             onClick={()=> deletPrd(item.id)}
                                                    />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>:
                                <div className="flex items-center justify-center">
                                    <h3 className="text-xl text-whiteText">No items in the cart</h3>
                                </div>
                            }

                            <div className="mt-8 flex border-t border-whiteText pt-8">
                                <div className="w-full space-y-4">
                                    <dl className="w-full text-whiteText">
                                        <div className="flex justify-between !text-xl font-medium">
                                            <dt>Total Price</dt>
                                            <dd>{price} $</dd>
                                        </div>
                                    </dl>

                                    <div className="flex items-center justify-end">
                                        <Link
                                            href="/checkout"
                                            className="block rounded bg-mintBg px-5 py-3 text-sm text-darkText transition"
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;