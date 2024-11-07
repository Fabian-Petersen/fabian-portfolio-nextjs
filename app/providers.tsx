import React from "react";
import AppProvider from "./useGlobalContext";
import { ToastContainer, toast } from "react-toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <ToastContainer position="top-center" theme="light" />
      {children}
    </AppProvider>
  );
};
export default Providers;
