"use client";
import React from "react";

interface ButtonProps {
  type?: "primary" | "secondary" | "link";
  href: string;
  classes?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "link",
  href,
  children,
  classes = "",
}) => {
  // button styles based on type
  // TODOD: font-mono, double check what I want font to be here
  // TODO: Make sure bg-220% is applying

  // const baseStyles = `relative inline-flex items-center font-mono text-sm font-extrabold
  //  px-6 py-3 rounded-md transition-all duration-300 ease-in-out bg-clip-padding text-white bg-[220%] outline outline-2`;

  const baseStyles = `relative inline-flex items-center font-mono text-sm font-extrabold px-6 py-3 rounded-md tranistion-all duration-300 ease-in-out bg-clip-padding
  `;

  // Moved to base style - outline outline-2 text-white bg-[length:220%]

  // text-decoration none?

  const primaryStyles = `
    bg-gradient-to-r from-transparent via-transparent to-blue-500 bg-[length:220%] outline outline-2 outline-blue-600 hover:bg-[length:100%] hover:bg-blue-600
    hover:shadow-[0_0_1rem_rgba(37,99,235,1)] hover:bg-gradient-to-l text-white bg-custom-gradient
  `;

  // const primaryStyles = `
  // ${baseStyles} hover:shadow-[0_0_1rem_rgba(0,87,255,1)] outline-[#0057ff]
  // bg-gradient-to-r from-transparent to-transparent hover:bg-[length:100%] hover:bg-[#0041cc]
  //  bg-gradient-to-r from-transparent to-transparent hover:bg-gradient-to-r hover:from-transparent hover:to-[#6366f1] hover:bg-[length:100%] hover:shadow-[0_0_1rem_rgba(30,58,138,1)]
  // `;

  // TODO: Might not need secondary styles. Might just need a hero, contact & footer button

  const secondaryStyles = `
   ${baseStyles} text-white bg-gradient-to-r from-transparent to-transparent bg-[length:220%] 
   outline outline-2 outline-white hover:bg-[length:100%] hover:bg-[#0066ff]
   hover:shadow-[0_0_1rem_rgba(0,87,255,1)]`;

  const linkStyles = "text-[#0057ff] underline hover:text-[#0041cc]";

  //   button type check
  const buttonTypeStyles =
    type === "primary"
      ? primaryStyles
      : type === "secondary"
      ? secondaryStyles
      : linkStyles;

  return (
    <a href={href} className={`${baseStyles} ${buttonTypeStyles} ${classes}`}>
      {children}
    </a>
  );
};

export default Button;
