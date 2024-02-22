'use client'
import { useEffect, useState, useRef } from "react";
import CustomButton from "./components/CustomButton";
import CustomFooter from "./components/CustomFooter";
import Header from "./components/Header";
import HighlightCarousel from "./components/HighlightCarousel";
import ProductCard from "./components/ProductCard";
import ProductTimer from "./components/ProductTimer";
import SectionBadge from "./components/SectionBadge";
import SectionTitle from "./components/SectionTitle";
import TopHeader from "./components/TopHeader";
import NavArrow from "./components/NavArrow";
import CategoryCard from "./components/CategoryCard";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);
  const productContainerRef = useRef(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')
      .then(res=>res.json())
      .then(json=>setBestSelling(json))
  }, []);

  const handleScrollLeft = () => {
    const container = productContainerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollLeft - 400,
        behavior: 'smooth',
      });
      setScrollLeft(scrollLeft - 400);
    }
  };

  const handleScrollRight = () => {
    const container = productContainerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollLeft + 400,
        behavior: 'smooth',
      });
      setScrollLeft(scrollLeft + 400);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <TopHeader />
      <Header />

      <div className="lg:px-32 lg:py-20 pb-10">
        <img src="mockup_carousel.svg" className="min-w-full" alt="" />
      </div>

      <div className="block lg:mb-20">
        <div className="lg:px-32 px-5">
          <SectionBadge badge="Today's"/>
        </div>
        <div className="lg:flex lg:px-32 px-5 items-center lg:gap-32 mb-10">
          <SectionTitle text="Flash Sales"/>
          <ProductTimer days="03" hours="23" minutes="19" seconds="56" />
          <NavArrow onScrollLeft={handleScrollLeft} onScrollRight={handleScrollRight} />
        </div>
        <div ref={productContainerRef} className="flex gap-10 lg:pl-32 pl-5 no-scrollbar overflow-x-auto">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.title}
              productImage={product.image}
              realPrice={product.price}
              discountedPrice={product.price - (product.price * 60 / 100)}
              rating={product.rating.rate}
              sumReview={product.rating.count}
              id={product.id}
            />
          ))}
        </div>
        <center className="my-10 lg:pb-0 pb-5">
          <CustomButton isDisabled={false} isRed={true} text="View All Products"/>
        </center>
        <div className="lg:border-b border-gray-300 mx-32"></div>
      </div>

      <div className="block lg:mb-20 lg:px-32 px-5">
        <SectionBadge badge="Categories"/>
        <div className="flex items-center lg:mb-10">
          <SectionTitle text="Browse By Category"/>
        </div>
        <div className="flex lg:justify-between gap-4 overflow-x-auto mb-20">
          <CategoryCard isActive={false} text={'Camera'} image={'Category-Camera.svg'}/>
          <CategoryCard isActive={false} text={'Cell Phone'} image={'Category-CellPhone.svg'}/>
          <CategoryCard isActive={false} text={'Computer'} image={'Category-Computer.svg'}/>
          <CategoryCard isActive={false} text={'Gamepad'} image={'Category-Gamepad.svg'}/>
          <CategoryCard isActive={true} text={'Headphone'} image={'Category-Headphone.svg'}/>
          <CategoryCard isActive={false} text={'Smart Watch'} image={'Category-SmartWatch.svg'}/>
        </div>
        <div className="lg:border-b border-gray-300"></div>
      </div>
      
      <div className="block mb-20 lg:px-32 px-5">
        <SectionBadge badge="This Month"/>
        <div className="flex items-center mb-10">
          <SectionTitle text="Best Selling Products"/>
          <div className="ml-auto">
            <CustomButton isDisabled={false} isRed={true} text="View All"/>
          </div>
        </div>
        <div className="justify-between flex gap-10 lg:pl-0 pl-5 no-scrollbar overflow-x-auto">
        {bestSelling.map((product, index) => (
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
        <div className="lg:border-b border-gray-300"></div>
      </div>

      <div className="lg:px-32 px-5 py-20">
        <img src="mockup_speaker.svg" className="min-w-full" alt="" />
      </div>

      <div className="block lg:mb-20 lg:px-32 px-5">
        <SectionBadge badge="This Month"/>
        <div className="flex items-center mb-10">
          <SectionTitle text="Best Selling Products"/>
          <div className="ml-auto">
            <CustomButton isDisabled={false} isRed={true} text="View All"/>
          </div>
        </div>
        <div className="justify-between flex gap-10 lg:pl-0 pl-5 no-scrollbar overflow-x-auto">
        {bestSelling.map((product, index) => (
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
        <div className="lg:border-b border-gray-300"></div>
      </div>

      <div className="lg:my-20 my-10 lg:px-auto px-5 justify-center">
        <center>
          <img src="mockup_feature.svg" />
        </center>
      </div>
      
      <CustomFooter />
    </main>
  );
}
