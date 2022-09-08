import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainAbout from "./components/Main/About";
import Experience from "./components/Main/Experience";
import MainServices from "./components/Main/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainAbout />
      {/* <MainServices />
      <Experience /> */}
    </>
  );
}

export default App;
