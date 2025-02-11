"use client"

import About from "./about/About";
import Contact from "./contact/Contact";
import CallAction from "./feature/call-action/CallAction";
import Client from "./feature/client/Client";
import Feature from "./feature/Feature";
import FeatureCart from "./feature/feature-cart/FeatureCart";
import FeatureTwo from "./feature/feature-two/FeatureTwo";
import Stats from "./feature/stats/Stats";
import Testimonials from "./feature/testimonials/Testimonials";
import Hero from "./hero/Hero";
import Pricing from "./pricing/Pricing";
import Service from "./service/Service";

export default function Home() {
  return (
    <main className="px-3">
      <Hero />
      <About />
      <Feature />
      <FeatureCart />
      <FeatureTwo />
      <CallAction />
      <Client />
      <Testimonials />
      <Stats />
      <Service />
      <Pricing />
      <Contact />
    </main>
  );
}
