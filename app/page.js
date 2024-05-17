import Image from "next/image";
import Hero from "./_components/hero/Hero.jsx";
import ProductSection from "@/app/_components/productSection/ProductSection.jsx";

export default function Home() {
  return (
    <>
      <Hero/>
      <ProductSection/>
    </>
  );
}
