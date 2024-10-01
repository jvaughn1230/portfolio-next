"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
  return <ToastContainer position="top-right" autoClose={5000} closeOnClick />;
};

export const toastSuccess = (message: string) => toast.success(message);
export const toastError = (message: string) => toast.error(message);
