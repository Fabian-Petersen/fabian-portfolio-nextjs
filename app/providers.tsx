import React from "react";
import AppProvider from "./useGlobalContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>;
};
export default Providers;
