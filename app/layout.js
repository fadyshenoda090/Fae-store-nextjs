'use client'
import { Almarai } from "next/font/google";
import "./globals.css";
import Header from './_components/header/Header.jsx'
import Footer from './_components/footer/Footer.jsx';
import { ClerkProvider } from '@clerk/nextjs'
import {CartProvider} from "../app/_contexts/cartContext";
import {useState} from "react";
const roboto = Almarai({ subsets: ["arabic"],weight:"700"});

// export const metadata = {
//   title: "E-commerce",
//   description: "Shop your dream products",
// };

export default function RootLayout({ children }) {
  const [cart,setCart] = useState([])
  return (
      <ClerkProvider>
        <CartProvider value={{cart, setCart}}>
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
        </CartProvider>
      </ClerkProvider>
  );
}
