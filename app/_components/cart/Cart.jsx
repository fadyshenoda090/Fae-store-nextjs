import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Cart = ({cart, clicked, setClicked}) => {
    const router = useRouter();
    const variants = {
        initial: {
            width: 0,
            height: 0,
            opacity: 0,
        },
        animate: {
            opacity: 1,
            height: 'fit-content',
            maxHeight: '20rem',
            width: '15rem',
            overflowX: 'hidden',
            transition: {
                height: {duration: 0.4, type: 'easeInOut'},
                width: {delay: 0.1 ,duration: 0.5, type: 'easeInOut'},
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate={clicked ? "animate" : "initial"}
            variants={variants}
            className={`scrollBarHide h-fit max-h-[20rem] w-[15rem] bg-whiteBg z-10 rounded-md flex flex-col items-center gap-2
                        absolute right-[7.5rem] md:right-[5rem] top-12 p-5 overflow-auto ${clicked ? 'block' : 'hidden'}`}
        >
            <ul className={`flex flex-col items-center gap-4`}>
                {cart?.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-4 cursor-pointer"
                        onClick={() => {
                            setClicked(false)
                            router.push(`/cart`)
                        }}
                    >
                        <Image
                            loading={"lazy"}
                            src={item?.attributes?.products?.data[0]?.attributes?.coverImg?.data?.attributes?.url}
                            alt="Cart Item"
                            className="size-14 rounded object-fill"
                            width={56}
                            height={56}
                        />
                        <div>
                            <h3 className="text-[0.9rem] text-darkText w-[10rem] text-ellipsis line-clamp-1">
                                {item?.attributes?.products?.data[0]?.attributes?.title}
                            </h3>
                            <dl className="mt-0.5 space-y-px text-[0.8rem] text-darkText">
                                <div>
                                    <dt className="inline">category:</dt>
                                    <dd className="inline">{item?.attributes?.products?.data[0]?.attributes?.category}</dd>
                                </div>
                                <div className={`flex items-center gap-1 text-[0.8rem] font-bold`}>
                                    <dt className="inline">instant delivery:</dt>
                                    <dd className="inline">{item?.attributes?.products?.data[0]?.attributes?.instantDelivery ? 'Yes' : 'No'}</dd>
                                </div>
                            </dl>
                        </div>
                    </li>
                ))}
            </ul>
            <motion.button
                whileHover={{scale: 1.05, transition: {duration: 0.2}}}
                onClick={() => {
                    router.push(`/cart`)
                    setClicked(false)
                }}
                className={`w-full bg-mintBg text-darkText text-center py-2 rounded-lg`}
            >
                View Cart
            </motion.button>
        </motion.div>
    );
};

export default Cart;
