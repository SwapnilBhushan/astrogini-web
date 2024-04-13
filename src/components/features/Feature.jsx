import React from "react";
import chat from "../../assets/images/content/astrogini_chat_with_astrologer.png";
import ww2 from "../../assets/images/content/ww_2.png";
import ww3 from "../../assets/images/content/ww_3.png";
import ww4 from "../../assets/images/content/ww_4.png";
import ww5 from "../../assets/images/content/ww_5.png";
import ww6 from "../../assets/images/content/ww_6.png";

const Feature = () => {
  return (
    <div className="ast_whywe_wrapper ast_toppadder50 ast_bottompadder20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            {/* <!--		<div class="ast_heading">
                <h1>why  <span>choose us</span></h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hummer.</p>
            </div> --> */}
          </div>
          <div className="ast_whywe_info row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={chat} alt="Chat With Astrologer" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Chat With Astrologer</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic" style={{}}>
                  <span className="nv_icon">
                    <img src={ww2} alt="bb" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Talk To Astrologer</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={ww3} alt="" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Remedies</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={ww4} alt="" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Gemstones</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={ww5} alt="" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Planets</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={ww6} alt="" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Nakshatras</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={ww5} alt="" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Book Pooja</strong>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="nv_whywe_info_box">
                <div className="nv_whywe_info_box_pic">
                  <span className="nv_icon">
                    <img src={ww6} alt="" />
                  </span>
                </div>
                <div className="nv_whywe_info_box_info">
                  <strong>Astrogini Blog</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
