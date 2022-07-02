import { useEffect, useLayoutEffect, useState } from "react";
import IUseTheme from "../interfaces/hooks/useTheme.interface";

const defaultTheme = window.store.theme;

export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("app-theme") || defaultTheme
  );

  const handleSetTheme = (value: string) => {
    window.store.setTheme(value);
    setTheme(value);
  };

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.addEventListener("themeChange", () => {
      document.documentElement.setAttribute("data-theme", theme);
      setTheme(window.store.theme);
    });
  }, [theme]);

  return { theme, setTheme: handleSetTheme };
};
