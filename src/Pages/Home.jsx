import React from "react";

import Hero from "../Components/Home/Hero";
import Catagories from "../Components/Home/Catagories";
import ServiceFeatures from "../Components/Home/ServiceFeatures";
import Banner from "../Components/Home/Banner";
import Brands from "../Components/Home/Brands";
import Review from "../Components/Home/Review";
import SaleProducts from "../Components/Home/SalesProducts";
import NewProducts from "../Components/Home/NewProducts";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import BSProducts from "../Components/Home/bestSellar";
import LimitedProducts from "../Components/Home/Limited";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <Hero />
        <SaleProducts />
        <Catagories />
        <FeaturedProducts />
        <ServiceFeatures />
        <NewProducts />

        <Banner />
        <BSProducts />
        <Brands />
        <LimitedProducts />
        <Review />
      </div>
    </>
  );
}
