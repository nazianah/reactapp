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
import { Route, Link, BrowserRouter, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Routes>
            <Route exact path="/" element={<AboutMe />} />
            <Route path="/books/:id" element={<Books />} />
            <Route exact path="/contact" element={<Contact></Contact>}/>
          </Routes>
      </div>
    </BrowserRouter>

    {/* <AboutMe name="NAZIANAH" />
    <Books name="surround by idoits" />
    <AboutMeL name="lorshinee" />
    <Hobby name="reading" />
    <AboutMeL name="Himanish" />
    <Hobby name="Drink Beer" />
    <Contact/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
