"use client";
import React from "react";
import { MENULINKS } from "@/lib/constants";

const Menu = () => {
  return (
    <div className="menu fixed top-0 left-0 w-full h-full flex items-center justify-center invisible">
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen">
          <ul className="list-none py-4 px-0 m-0 block max-h-screen">
            {MENULINKS.map((link) => (
              <li key={link.name} className="p-0 m-6 text-2xl block">
                <a
                  className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                  href={`#${link.ref}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
