"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Filter } from "bad-words";
import { sendEmail } from "./Mailer";
import { FormDataType } from "@/types/types";
import AnimatedButton from "../buttons/AnimatedButton";
import InputField from "./InputField";
import { Toast, toastSuccess, toastError } from "./Toast";

const ContactForm = () => {
  const filter = new Filter();
  const formRef = useRef<HTMLFormElement | null>(null);

  const initialState: FormDataType = { name: "", email: "", message: "" };

  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [isSending, setIsSending] = useState<boolean>(false);

  //   form input change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [id]: filter.clean(value), // Replaces bad words automatically
    }));
  };

  //   reset form after submission
  const emptyForm = () => {
    setFormData(initialState);
  };

  // form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toastError("Please fill the required fields");
      return;
    }

    setIsSending(true);

    sendEmail({ name, email, message })
      .then(() => {
        toastSuccess("Message Sent!");
        emptyForm();
      })
      .catch((error) => {
        toastError("Failed to send message");
        console.error("Failed to send email:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form
      className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <InputField
        field="name"
        value={formData.name}
        handleChange={handleChange}
      />
      <InputField
        field="email"
        value={formData.email}
        handleChange={handleChange}
      />
      <InputField
        field="message"
        value={formData.message}
        handleChange={handleChange}
      />

      <div className="mt-9 flex justify-center">
        <AnimatedButton
          formData={formData}
          isSending={isSending}
          formRef={formRef}
        />
      </div>
      <Toast />
    </form>
  );
};

export default ContactForm;
