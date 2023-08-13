// State and context hooks from React.
import React, { useState, useEffect } from "react";

// Components for website displaying.
import Scrollbar from "./components/Scrollbar";
// import Header from "./organisms/Header";
import Hero from "./organisms/Hero";
import About from "./organisms/About";
import Projects from "./organisms/Projects";
import Testimonials from "./organisms/Testimonials";
import Contact from "./organisms/Contact";

function App() {
  const [open, setOpen] = useState(false);

  const menuController = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <React.Fragment>
      <Scrollbar />
      {/* <Header open={open} menuController={menuController} /> */}
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </React.Fragment>
  );
}

export default App;
