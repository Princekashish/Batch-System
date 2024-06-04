"use client";

import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Testemonial from "@/components/Testemonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Testemonial />
      <FAQ />
      <Banner />
    </div>
  );
}
