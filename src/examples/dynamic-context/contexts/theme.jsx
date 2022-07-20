import React, { useContext } from "react";

export const themes = {
  light: {
    color: '#282c34',
    background: "#fff",
  },
  dark: {
    color: '#fff',
    background: "#282c34",
  },
};

export const ThemeContext = React.createContext(
  themes.dark // значение по умолчанию
);


export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if(!theme) return theme.dark;

  return theme;
}