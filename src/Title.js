import React, { Component } from "react";
import themeContext from "./themeContext";

export default class Title extends Component {
  render() {
    const value = this.context;
    console.log(value);
    return <h1>{`${this.props.title} theme ${value.theme}`}</h1>;
  }
}

Title.contextType = themeContext;
