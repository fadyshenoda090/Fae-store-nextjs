'use client'
import React, {useContext, useEffect, useState} from "react";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import Link from "next/link";
import {UserButton, useUser} from "@clerk/nextjs";
import {FaShoppingBag} from "react-icons/fa";
import {cartContext} from "../../_contexts/cartContext";
import {dark, neobrutalism} from '@clerk/themes';
import cartApis from "@/app/_utils/cartApis/CartApis";
import axiosInstance from "@/app/_utils/axiosConfig/axiosInstance";
import Cart from "@/app/_components/cart/Cart";

function Header() {
    const {cart, setCart} = useContext(cartContext)
    const {user} = useUser();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [clickedCart, setClickedCart] = useState(false)
    let u = window.location.href
    useEffect(() => {
        setIsLoggedIn(window.location.href.toString().endsWith(`sign-in`) || window.location.href.toString().endsWith(`sign-up`))
    }, [u]);
    console.log('userrrr', user?.primaryEmailAddress.emailAddress)
    useEffect(() => {
        const getCartItems = () => axiosInstance.get(`/carts?populate[products][populate]=coverImg&filters[email][$eq]=${user?.primaryEmailAddress.emailAddress}`).then(
            res => {
                console.log('cartItems', res.data.data.length)
                setCart(res.data.data)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
        if (user) {
            getCartItems()
        }
    }, [user]);
    return !isLoggedIn && (
        <header className="">
            <div className="w-full px-4 sm:px-6 lg:px-8 shadow-[#4d4a4a] shadow-[0px_3px_20px_0px]">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-mintBg" href={`/`}>
                            <Image alt={`logo image`} src={logo} className="w-[5rem] h-[5rem]"/>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6">
                                <li>
                                    <Link className="text-whiteText relative overflow-hidden" href={`/`}>
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-whiteText relative overflow-hidden" href="#">
                                        Explore
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-whiteText relative overflow-hidden" href="#">
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-whiteText relative overflow-hidden" href="#">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-whiteText relative overflow-hidden" href="#">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        {!user ? <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-mintBg px-5 py-2.5 text-sm font-medium text-[#1b2223] shadow"
                                href="/sign-in">
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#1b2223]"
                                    href={`sign-up`}
                                >
                                    Register
                                </a>
                            </div>
                        </div> : <div className={`flex items-center gap-5`}>
                            <div onClick={() => setClickedCart(!clickedCart)}
                                 className={`flex items-center gap-1 text-[1.2rem] select-none cursor-pointer`}>
                                <FaShoppingBag className={`text-2xl`}/> ({cart?.length})
                            </div>
                            <UserButton
                                afterSignOutUrl={`/`} appearance={{
                                elements: {
                                    userButtonBox: {
                                        flexDirection: "row-reverse",
                                    },
                                    userButtonOuterIdentifier: {
                                        color: 'white'
                                    }
                                },
                            }}
                                //showName={true}
                            />
                            <Cart cart={cart} clicked={clickedCart} setClicked={setClickedCart} />
                        </div>}

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
