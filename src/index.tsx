import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GithubCorner from "react-github-corner";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GithubCorner href="https://github.com/KmanCZ/React-Lorem-Ipsum-Generator" />
  </React.StrictMode>,
  document.getElementById("root")
);
