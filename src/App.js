import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer/Footer";
import Particle from "./components/Particle";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle isDarkMode={isDarkMode} />
        <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode((v) => !v)} />
        <div id="home"><Home /></div>
        <div id="experience"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="resume"><Resume /></div>
        <div id="interests"><Interests /></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
