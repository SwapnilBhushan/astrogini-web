import React from "react";
import tm1 from "../../assets/images/content/astrogini_tm1.jpg";
import tm2 from "../../assets/images/content/astrogini_tm2.jpg";
import tm3 from "../../assets/images/content/astrogini_tm3.jpg";
import tm4 from "../../assets/images/content/astrogini_tm4.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamMembers = () => {
  return (
    <div className="ast_team_wrapper ast_toppadder50 ast_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1 style={{ fontWeight: "bold" }}>
                Our <span>Experts</span>
              </h1>
              <p>
                At Astrogini we have top, best and expert astrologers from India
                and around the world for Online Horoscope & Astrology
                Consultation
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ast_team_box">
              <img src={tm1} alt="team" />
              <h4>
                <a
                  href="team_single.html"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Harsh Vardhan
                </a>
              </h4>
              <p>Astrologer</p>
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <XIcon style={{ fontSize: 20 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ast_team_box">
              <img src={tm2} alt="team" />
              <h4>
                <a
                  href="team_single.html"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Harsh Vardhan
                </a>
              </h4>
              <p>Tarot Reader</p>
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <XIcon style={{ fontSize: 20 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ast_team_box">
              <img src={tm3} alt="team" />
              <h4>
                <a
                  href="team_single.html"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Harsh Vardhan
                </a>
              </h4>
              <p>Gemstonist</p>
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <XIcon style={{ fontSize: 20 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ast_team_box">
              <img src={tm4} alt="team" />
              <h4>
                <a
                  href="team_single.html"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Harsh Vardhan
                </a>
              </h4>
              <p>Astrologist</p>
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon style={{ fontSize: 23 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <XIcon style={{ fontSize: 20 }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
