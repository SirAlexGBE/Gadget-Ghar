import React from "react";

import Hero from "../Components/Home/Hero";
import Catagories from "../Components/Home/Catagories";
import ServiceFeatures from "../Components/Home/ServiceFeatures";
import Banner from "../Components/Home/Banner";
import Brands from "../Components/Home/Brands";
import Review from "../Components/Home/Review";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <Hero />
        <Catagories />
        <ServiceFeatures />
        <Banner />
        <Brands />
        <Review />
      </div>
    </>
  );
}
