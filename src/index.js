import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Frame from "./components/frame";

// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'


ReactDOM.render(
  <div className="container">
    <Frame />
  </div>,
    document.getElementById("app")
  );