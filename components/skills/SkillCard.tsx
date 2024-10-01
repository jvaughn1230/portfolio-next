import React from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";

type SkillCardProps = {
  skill: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  let tippy;

  skill === "csharp" ? (tippy = "C#") : (tippy = skill);

  return (
    <Tippy
      key={skill}
      content={`${tippy.toUpperCase()}`}
      theme="gradient"
      placement="bottom"
    >
      <Image src={`/skills/${skill}.svg`} alt={skill} width={50} height={50} />
    </Tippy>
  );
};

export default SkillCard;
