import React from "react";
import "./footer.css";
import logo from "../../assets/images/header/astrogini_logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  return (
    <div className="ast_footer_wrapper ast_toppadder40 ast_bottompadder20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_footer_info">
              <img src={logo} alt="Astrogini Logo" />
              <p>
                Astrogini is an online Astrology Consultant and prediction
                Website. Astrogini is the best and unique astrology website for
                online Astrology predictions. Chat with Astrologer or Talk to
                the Astrologer on call and get answers to all your problems. Get
                to know your Astrology Kundli Predictions from the best
                Astrogini Astrologers from India. Get best future predictions
                related to Health, Career, Marriage, Love Life or Property
                Issues over call, chat, query or report.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GoogleIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">Get Offers</h4>
              <div className="ast_newsletter">
                <p>Register at our platform to get special offers.</p>
                <div className="ast_newsletter_box">
                  <input type="text" placeholder="Email" />
                  <button type="submit">
                    <TelegramIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">Our Services</h4>
              <div className="ast_servicelink">
                <ul>
                  <li>
                    <a href="services.html">Horoscopes</a>
                  </li>
                  <li>
                    <a href="services.html">Gemstones</a>
                  </li>
                  <li>
                    <a href="services.html">Numerology</a>
                  </li>
                  <li>
                    <a href="services.html">Tarot Cards</a>
                  </li>
                  <li>
                    <a href="services.html">Birth journal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">Quick Links</h4>
              <div className="ast_sociallink">
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="team.html">Astrologers</a>
                  </li>
                  <li>
                    <a href="error.html">404 error</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="widget text-widget">
              <h4 className="widget-title">Get In Touch</h4>
              <div className="ast_gettouch">
                <ul>
                  <li>
                    <HomeIcon
                      style={{
                        color: "#fecc03",
                        marginRight: 5,
                      }}
                    />
                    <p>Astrogini Services Pvt. Ltd. Lucknow, UP, India</p>
                  </li>
                  <li>
                    <AlternateEmailIcon style={{ color: "#fecc03" }} />
                    <p>
                      <a href="mailto:support@astrogini.net">
                        support@astrogini.net
                      </a>
                      <a href="mailto:info@astrogini.net">info@astrogini.net</a>
                    </p>
                  </li>
                  <li>
                    <LocalPhoneIcon style={{ color: "#fecc03" }} />
                    <p>
                      <a href="tel:(+91)9554445866">(+91) 955 444 5866</a>
                    </p>
                    <p>
                      <a href="tel:(+91)9554445866">(+91) 955 444 5866</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_copyright_wrapper">
              <p>
                <small>
                  <a href="https://www.astrogini.com/">
                    <strong>
                      <span style={{ color: "#fecc03" }}>
                        Astrogini Services Pvt. Ltd.
                      </span>
                    </strong>
                  </a>
                  <span style={{ color: "#fff" }}> © 2024 | Powered By : </span>
                  <a href="https://webcaresolutionz.com/">
                    <strong>
                      <span style={{ color: "#72c02c" }}>
                        Webcare Solutionz
                      </span>
                    </strong>
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
