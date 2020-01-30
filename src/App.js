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

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Page>
          <h1>React ContextAPI Learning</h1>
          {theme}
          <Button title="Change Theme" handleClick={handleSetTheme} />
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}
