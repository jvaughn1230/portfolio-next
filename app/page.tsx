"use client";
import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // check if desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    checkIsDesktop();

    window.addEventListener("resize", checkIsDesktop);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  console.log(isDesktop);

  // display loading screen for 2.6 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);
  }, []);

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
          <Projects isDesktop={isDesktop} />
          <Contact />
        </main>
      )}
    </>
  );
}
