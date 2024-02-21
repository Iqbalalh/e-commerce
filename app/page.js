'use client'
import { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomFooter from "./components/CustomFooter";
import Header from "./components/Header";
import HighlightCarousel from "./components/HighlightCarousel";
import ProductCard from "./components/ProductCard";
import ProductTimer from "./components/ProductTimer";
import SectionBadge from "./components/SectionBadge";
import SectionTitle from "./components/SectionTitle";
import TopHeader from "./components/TopHeader";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <main className="min-h-screen">
      <TopHeader />
      <Header />
      <HighlightCarousel />
      <div className="px-32 block mb-20">
        <SectionBadge badge="This Month"/>
        <div className="flex items-center gap-32 mb-10">
          <SectionTitle text="Best Selling Products"/>
          <ProductTimer days="03" hours="23" minutes="19" seconds="56" />
        </div>
        <div className="flex gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.title}
              productImage={product.image}
              realPrice={product.price}
              discountedPrice={product.price - (product.price * 60 / 100)}
              rating={product.rating.rate}
              sumReview={product.rating.count}
            />
          ))}
        </div>
      </div>
      <div className="px-32 flex gap-20 mb-20"> 
        <CustomButton text="View All" isDisabled={false} isRed={true}/>
        <CustomButton text="View All" isDisabled={true} isRed={true}/>
        <CustomButton text="View All" isDisabled={false} isRed={false}/>
        <CustomButton text="View All" isDisabled={true} isRed={false}/>
      </div>
      
      <CustomFooter />
    </main>
  );
}
