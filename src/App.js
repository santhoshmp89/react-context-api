import React, { useState } from "react";
import "./styles.css";
import Page from "./Page";
import Button from "./Button";
import ThemeContext from "./themeContext";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const handleSetTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const contextValue = {
    theme: theme,
    themeChange: handleSetTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className="App">
        <Page>
          <h1>React ContextAPI Learning</h1>
          {contextValue.theme}
          <Button title="Change Theme" />
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}
