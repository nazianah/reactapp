import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AboutMe from "./AboutMe";
import Books from "./Books";
import AboutMeL from "./aboutmeL";
import Hobby from "./hobby";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AboutMe name="NAZIANAH" />
    <Books name="surround by idoits" />
    <AboutMeL name="lorshinee" />
    <Hobby name="reading" />
    <AboutMeL name="Himanish" />
    <Hobby name="Drink Beer" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
