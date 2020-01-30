import React from "react";
import ThemeContext from "./themeContext";

const Button = props => {
  return (
    <ThemeContext.Consumer>
      {value => {
        return (
          <button onClick={props.handleClick}>{`${
            props.title
          } ${value}`}</button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Button;
