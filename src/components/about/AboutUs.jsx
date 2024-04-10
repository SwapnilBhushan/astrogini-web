import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/content/astrogini_about.png";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
const AboutUs = () => {
  return (
    <div className="ast_about_wrapper ast_toppadder50 ast_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <div>&nbsp;</div>
              <h1>
                About <span>Astrology</span>
              </h1>
              <p style={{ textAlign: "center" }}>
                Astrology is a belief system that suggests a relationship
                between the positions and movements of celestial bodies (such as
                planets and stars) and events on Earth, including human life and
                personality traits. It has been practiced in various forms for
                thousands of years and has roots in ancient civilizations.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <div className="ast_about_info_img">
              <img src={aboutImage} alt="About" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="ast_about_info">
              <h4>Know About Astrology</h4>
              <p style={{ textAlign: "justify" }}>
                Astrology is a part of spirituality, its astrological theories
                and calculations help us to prepare the person’s horoscope.
                According to Vedic astrology, the horoscopes play a significant
                role in the native’s life and give them an idea of the future.
                Now, quickly moving on to find how does astrology work?
              </p>
              <p style={{ textAlign: "justify" }}>
                Additionally, Astrology is a sophisticated and complex science.
                Drawing from thousands of years of theoretical and applied
                knowledge, an astrologer interprets the arrangement of planets
                and stars to see how they reveal a certain course of events on
                earth.
              </p>
              <a href="about.html" className="nv-sm_btn">
                Know More
              </a>

              <div className="nv_contact_expert">
                <span className="nv_icon">
                  <WifiCalling3Icon
                    style={{
                      fontSize: "29px",
                      marginRight: 5,
                      color: "#fff",
                    }}
                  />
                </span>
                <div>
                  <a href="service_single.html" className="nv_btn">
                    <h1>Consult Astrologers</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
