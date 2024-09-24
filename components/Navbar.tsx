"use client";
import React, { useRef, ReactNode } from "react";
// import Image from "next/image";
import "../styles/navbar.styles.css";

const Navbar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const menuRef = useRef(null);

  return (
    <nav className="fixed w-full top-0 py-8 z-30 shadow-black transition-all duration-300">
      <div className="flex justify-between px-4 md:px-12 lg:px-20">
        <a href="#home">Logo</a>

        <div className="outer-menu relative flex items-center gap-8 z-[1]">
          <input
            ref={menuRef}
            aria-labelledby="menu"
            aria-label="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
          />
          <div className="hamburger w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center" />
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
