import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/header/astrogini_logo.png";
import BottomHeader from "../header/BottomHeader";
import Title from "./Title";
import ContactDetail from "./ContactDetail";
import FormSection from "./FormSection";
import Platform from "../platform/Platform";

const Contact = () => {
  return (
    <>
      <BottomHeader />
      <Title />
      <ContactDetail />
      <FormSection />
      <Platform />
    </>
  );
};

export default Contact;
