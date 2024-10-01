"use client";
import React, { useRef } from "react";
import { SKILLS, MENULINKS } from "@/lib/constants";
import SkillSection from "./SkillSection";
import "../../styles/skills.styles.css";

const Skills = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full realtive mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.
            </h2>
          </div>

          <div className="mt-10">
            <SkillSection
              skills={SKILLS.languages}
              title="languages and tools"
            />
          </div>
          <div className="mt-10">
            <SkillSection
              skills={SKILLS.libraries}
              title="libraries and frameworks"
            />
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <SkillSection skills={SKILLS.databases} title="databases" />
            </div>
            <div className="staggered-reveal">
              <SkillSection skills={SKILLS.other} title="other" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
