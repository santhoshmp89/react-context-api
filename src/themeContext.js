import { createContext } from "react";

const themeContext = createContext({
  theme: "light",
  themeChange: () => {}
});

export default themeContext;
