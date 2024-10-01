"use client";
import React, { useRef, useEffect } from "react";
import ContactForm from "./ContactForm";
import { ToastContainer } from "react-toastify";
import { MENULINKS } from "@/lib/constants";

import "../../styles/contact.styles.css";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section ref={sectionRef} id={MENULINKS[3].ref} className="contact-section">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <div className="section-container">
        <div className="contact-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              CONTACT
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Contact
            </h1>
          </div>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            Get In Touch
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
