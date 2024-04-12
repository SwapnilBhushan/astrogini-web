import React from "react";
import bg from "../../assets/images/slider/astrogini_slider1.jpg";
//import "./bottomHeader.css";
import logo from "../../assets/images/header/astrogini_logo.png";
const BottomHeader = () => {
  return (
    <div className="ast_header_bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-10">
            <div className="ast_logo">
              <a href="index.html">
                <img src={logo} alt="Astrogini Logo" title="Astrogini Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-9 col-2">
            <div className="ast_main_menu_wrapper">
              <div className="ast_menu">
                <ul>
                  <li>
                    <a href="index.html" style={{ textDecoration: "none" }}>
                      HOME
                    </a>
                  </li>
                  <li className="as_submenu_li">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      CONSULT ASTROLOGERS
                    </a>
                    <ul className="submenu dropdown">
                      <li>
                        <a href="index.html" style={{ textDecoration: "none" }}>
                          CHAT WITH ASTROLOGER
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          TALK TO ASTROLOGER
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="index-horoscope.html"
                      style={{ textDecoration: "none" }}
                    >
                      HOROSCOPE
                    </a>
                  </li>
                  <li className="as_submenu_li">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      KUNDLI
                    </a>
                    <ul className="submenu dropdown">
                      <li>
                        <a href="index.html" style={{ textDecoration: "none" }}>
                          FREE KUNDLI
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          KUNDLI MATCHING
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="index-horoscope.html"
                      style={{ textDecoration: "none" }}
                    >
                      PANCHANG
                    </a>
                  </li>
                  <li className="as_submenu_li">
                    <a
                      className="dropdown-toggle"
                      href="services.html"
                      style={{ textDecoration: "none" }}
                    >
                      OTHER SERVICES
                    </a>
                    <ul className="submenu dropdown">
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          ZODIAC SIGNS
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          PLANETS
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-tarot.html"
                          style={{ textDecoration: "none" }}
                        >
                          TAROT CARD
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-palmistry.html"
                          style={{ textDecoration: "none" }}
                        >
                          PALMISTRY
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-vastu.html"
                          style={{ textDecoration: "none" }}
                        >
                          VASTU SHASTRA
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-numerology.html"
                          style={{ textDecoration: "none" }}
                        >
                          NUMEROLOGY
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-gemstone.html"
                          style={{ textDecoration: "none" }}
                        >
                          REMEDIES
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="as_submenu_li">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      2024 SPECIALS
                    </a>
                    <ul className="submenu dropdown">
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          2024 HOROSCOPE
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          2024 TRANSITS
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          2024 NAKSHATRA
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          2024 SHUBH MUHURATS
                        </a>
                      </li>
                      <li>
                        <a
                          href="index-horoscope.html"
                          style={{ textDecoration: "none" }}
                        >
                          2024 FESTIVALS
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <button className="ast_menu_btn">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
