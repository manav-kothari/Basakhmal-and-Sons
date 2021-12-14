import React from "react";
import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import Contact from "../../components/Contact/Contact";
import HeroSection from "../../components/HeroSection/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <Contact />
      <About />
    </>
  );
}

export default Home;
