"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // const [isDesktop, setIsDesktop] = useState(true);
  // const [clientHeight, setClientHeight] = useState(0);
  // const [clientWidth, setClientWidth] = useState(0);

  // display loading screen for 2.6 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);
  }, []);
  //<className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <main className="flex flex-col bg-black text-white">
          <Navbar>
            <Menu />
          </Navbar>
          <Hero />
          <Skills />
          <Contact />
        </main>
      )}
    </>
  );
}
