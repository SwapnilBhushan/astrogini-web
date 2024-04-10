import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "./App.css";
import AboutUs from "./components/about/AboutUs";
import Feature from "./components/features/Feature";
import Services from "./components/services/Services";
import Sections from "./components/AstroSection/Sections";
import Records from "./components/record/Records";
import TeamMembers from "./components/teams/TeamMembers";
import Overview from "./components/overview/Overview";
import Testimonial from "./components/testimonials/Testimonial";
import WhyAstrogini from "./components/why/WhyAstrogini";
import Platform from "./components/platform/Platform";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="body">
      <Header />
      <AboutUs />
      <Feature />
      <Services />
      <Sections />
      <Records />
      <TeamMembers />
      <Overview />
      <Testimonial />
      <WhyAstrogini />
      <Platform />
      <Footer />
    </div>
  );
};

export default App;
