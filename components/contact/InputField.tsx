"use client";
import React, { ChangeEvent } from "react";

type InputFieldProps = {
  value: string;
  field: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

// Styles
const inputClass =
  "block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-blue-500 bg-transparent rounded-lg peer transition-all duration-200";
const labelClass =
  "absolute left-4 top-2 text-lg font-mono text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600";

const InputField: React.FC<InputFieldProps> = ({
  handleChange,
  field,
  value,
}) => {
  const label = field.toUpperCase();

  return (
    <div className="relative mt-14">
      {field === "message" ? (
        <textarea
          id="message"
          placeholder=" "
          className={inputClass}
          value={value}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          type={field === "email" ? "email" : "text"}
          id={field}
          placeholder=" "
          className={inputClass}
          value={value}
          onChange={handleChange}
          required
        />
      )}

      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default InputField;
