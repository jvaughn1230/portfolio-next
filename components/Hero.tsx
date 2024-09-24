"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "./Button";

import { TYPED_STRINGS, MENULINKS } from "@/lib/constants";

// Typed options
const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

// Typed Effect
const Hero = () => {
  const typedElementRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  // fade in effect
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 }) // Fade in the section
        .from(
          sectionRef.current?.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 } // Staggered reveal of elements
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      style={{ opacity: 0 }}
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
    >
      {/* typed text styling */}
      {/* <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style> */}

      {/* text section */}
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h5 className="intro font-mono font-medium text-indigo-light staggered-reveal">
          Hi, my name is
        </h5>
        <h1 className="heroName text-6xl font-semibold">
          <span className="staggered-reveal relative emphasize">Jeffrey</span>
          <span className="staggered-reveal"> Vaughn</span>
        </h1>
        <p>
          <span
            ref={typedElementRef}
            className="staggered-reveal text-3xl text-gray-light-3 font-mono leading-relaxed"
          />
        </p>
        <div className="staggered-reveal pt-4">
          <Button href={`#${MENULINKS[3].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
