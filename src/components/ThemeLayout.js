import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeLayout = ({ children }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <button onClick={updateTheme}>Update theme</button>
      {children}
    </div>
  );
};

export default ThemeLayout;
