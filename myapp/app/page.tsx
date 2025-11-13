"use client";
import Hero from "./components/Hero";

// import ScrollTriggerDemo from "./components/ScrollTriggerDemo";
import ProcessSection from "./components/Quality";
import AboutDown from "./components/WhyChooseUs";
import ParallaxPage from "./components/Parallex";
// import Hcontact from "./components/Hcontact"

import Services from "./components/Services"
import FourCards from "./components/FourCards"
import Clients from "./components/Clients"
import Faq from "./components/Faq"

export default function Home() {


  return (
    <>
   
      <Hero/>
            <Services/>

      <ProcessSection/>
  
      <AboutDown/>
      <ParallaxPage/>
      <Clients/>
      <FourCards/>
      <Faq/>
      {/* <Hcontact/> */}

    </>
    
  );
}
