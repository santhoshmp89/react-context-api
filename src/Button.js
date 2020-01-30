import React from "react";
import ThemeContext from "./themeContext";

const Button = props => {
  return (
    <ThemeContext.Consumer>
      {value => {
        return (
          <button onClick={value.themeChange}>{`${props.title} ${
            value.theme
          }`}</button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Button;
