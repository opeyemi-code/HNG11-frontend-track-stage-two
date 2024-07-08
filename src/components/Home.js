import React from "react";
import HeroSection from "./sub-component/HeroSection";
import Products from "./sub-component/Products";
import Header from "./sub-component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="products">
        <HeroSection />
        <Products />
      </main>
    </>
  );
}
