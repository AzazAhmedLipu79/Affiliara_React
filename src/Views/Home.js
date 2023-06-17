import React from "react";
import Hero from "../Model/Home/Hero";
import Feature from "../Model/Home/Feature";
import Newsletter from "../Model/Shared/Newsletter";
import Footer from "../Model/Footer";

export default function Home() {
  return (
    <>
      <div className="font-a text-center text-4xl lg:text-3xl lg:my-4 py-5 mt-2 pb-5  ">
        <span className="animate-pulse text-gray-900">R</span>edowan{" "}
        <span className="animate-pulse text-gray-900">R</span>afy
      </div>
      <Hero />
      <Feature />
      <Newsletter text={"Provide Your Email Address For Get Free E-Book"} />
      <Footer />
    </>
  );
}
