import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "./App.css";
import AboutUs from "./components/about/AboutUs";
import Feature from "./components/features/Feature";
import Services from "./components/services/Services";
import Sections from "./components/AstroSection/Sections";

const App = () => {
  return (
    <div className="body">
      <Header />
      <AboutUs />
      <Feature />
      <Services />
      <Sections/>
    </div>
  );
};

export default App;
