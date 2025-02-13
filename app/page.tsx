"use client"

import { BsArrowUp } from "react-icons/bs";
import About from "./about/About";
import Contact from "./contact/Contact";
import CallAction from "./call-action/CallAction";
import Client from "./client/Client";
import Feature from "./feature/Feature";
import FeatureCart from "./feature-cart/FeatureCart";
import FeatureTwo from "./feature-two/FeatureTwo";
import Stats from "./stats/Stats";
import Testimonials from "./testimonials/Testimonials";
import Hero from "./hero/Hero";
import Pricing from "./pricing/Pricing";
import Service from "./service/Service";
import CallAction2 from "./call-action2/CallAction";

import "animate.css/animate.compat.css";

export default function Home() {
  return (
    <main className="relative px-3">
      <Hero />
      <About />
      <Feature />
      <FeatureCart />
      <FeatureTwo />
      {/* TODO:: Call Action animate */}
      <CallAction />
      <Client />
      <Testimonials />
      <Stats />
      <Service />
      <Pricing />
      <CallAction2 />
      <Contact />
      <div className=" inline-flex z-10 items-center justify-center box-border bg-accent outline-0 border-0 m-0 cursor-pointer  text-center flex-[0_0_auto] rounded-full text-[1.7rem] fixed bottom-[20px] right-[20px] text-white p-[10px]">
        <BsArrowUp size={30}/>
      </div>
    </main>
  );
}
