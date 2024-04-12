import React from "react";
import ww1 from "../../assets/images/content/ww_1.png";
import ww2 from "../../assets/images/content/ww_2.png";
import ww3 from "../../assets/images/content/ww_3.png";
import ww4 from "../../assets/images/content/ww_4.png";
import ww5 from "../../assets/images/content/ww_5.png";
import ww6 from "../../assets/images/content/ww_6.png";

const WhyAstrogini = () => {
  return (
    <div className="ast_whywe_wrapper ast_toppadder40 ast_bottompadder20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1 style={{ fontWeight: "bold" }}>
                Why <span>Choose Us</span>
              </h1>
              <p>
                Astrogini is not only a reliable astrology solution that
                provides you Free Astrology Services, but also a genuine
                astrology platform that lets you to consult with an expert panel
                of Astrologers who are available 24*7 and ready to solve your
                issues
              </p>
            </div>
          </div>
          <div className="ast_whywe_info row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span>
                  <img src={ww1} alt="" />
                </span>
                <div className="ast_whywe_info_box_info">
                  <p>5000+ Expert Astrologers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span>
                  <img src={ww2} alt="" />
                </span>
                <div className="ast_whywe_info_box_info">
                  <p>24x7, 365 Days Availability</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span>
                  <img src={ww3} alt="" />
                </span>
                <div className="ast_whywe_info_box_info">
                  <p>Instant Access Worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span>
                  <img src={ww4} alt="" />
                </span>
                <div className="ast_whywe_info_box_info">
                  <p>Accurate Remedial Solutions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span>
                  <img src={ww5} alt="" />
                </span>
                <div className="ast_whywe_info_box_info">
                  <p>Privacy Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="ast_whywe_info_box">
                <span>
                  <img src={ww6} alt="" />
                </span>
                <div className="ast_whywe_info_box_info">
                  <p>Trusted By Million Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAstrogini;
