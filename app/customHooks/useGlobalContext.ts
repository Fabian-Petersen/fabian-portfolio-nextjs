import { AppContext } from "@/ContextAPI";
import { useContext } from "react";

interface GlobalContext {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: boolean;
  setToggleTheme: (toggleTheme: boolean) => void;
  // Add other properties if needed
}
const useGlobalContext = (): GlobalContext => {
  return useContext(AppContext);
};

export default useGlobalContext;
