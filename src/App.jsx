import React from "react";
import Nav from "./componets/nav/Nav";
import Home from "./componets/Home/Home";
import About from "./componets/About/About";
import Project from "./componets/Projects/Project";
import Contact from "./componets/Contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default App;
