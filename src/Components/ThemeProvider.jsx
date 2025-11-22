import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const ThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
    useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, ThemeHandler ]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
