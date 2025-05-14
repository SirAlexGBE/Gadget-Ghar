import React from "react";

import Hero from "../Components/Hero";
import Catagories from "../Components/Catagories";
import ServiceFeatures from "../Components/ServiceFeatures";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <Hero />
        <Catagories />
        <ServiceFeatures />
        <Banner />
        <Brands />
      </div>
    </>
  );
}
