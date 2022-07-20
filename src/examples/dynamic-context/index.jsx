import { useState } from "react";

import { Page } from "./page";
import { UserContext } from "./contexts/user";
import { ThemeSwitcher } from "./theme-switcher";

import { ThemeContext, themes } from "./contexts/theme";

import { USER } from "../../constants";

export const DynamicContextApp = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <UserContext.Provider value={USER}>
        <ThemeSwitcher onClick={toggleTheme} />
        <Page />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
