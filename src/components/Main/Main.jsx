import React from "react";
import BottomHeader from "../header/BottomHeader";
import AboutUs from "../about/AboutUs";
import Feature from "../features/Feature";
import Services from "../services/Services";
import Sections from "../AstroSection/Sections";
import Records from "../record/Records";
import TeamMembers from "../teams/TeamMembers";
import Overview from "../overview/Overview";
import Testimonial from "../testimonials/Testimonial";
import WhyAstrogini from "../why/WhyAstrogini";
import Platform from "../platform/Platform";
import Slider from "../header/Slider";

const Main = () => {
  return (
    <>
      <BottomHeader />
      <Slider />
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
    </>
  );
};

export default Main;
