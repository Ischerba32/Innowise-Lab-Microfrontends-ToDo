import { useEffect, useLayoutEffect, useState } from "react";
import IUseTheme from "../interfaces/hooks/useTheme.interface";

// @ts-ignore
const defaultTheme = window.store.theme;

export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("app-theme") || defaultTheme
  );

  // @ts-ignore
  const handleSetTheme = (value: string) => {
    // @ts-ignore
    window.store.setTheme(value);
    setTheme(value);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.addEventListener("themeChange", () => {
      // @ts-ignore
      document.documentElement.setAttribute("data-theme", theme);
    });
  }, [theme]);

  return { theme, setTheme: handleSetTheme };
};
