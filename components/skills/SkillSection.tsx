"use client";
import React from "react";
import SkillCard from "./SkillCard";

type SkillSectionProps = {
  skills: string[];
  title: string;
};

const SkillSection: React.FC<SkillSectionProps> = ({ skills, title }) => {
  return (
    <>
      <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-6 transform-gpu">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default SkillSection;
