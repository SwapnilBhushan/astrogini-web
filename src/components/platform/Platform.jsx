import React from "react";
import apple from "../../assets/images/content/astrogini_download_app_AppStore.png";
import google from "../../assets/images/content/astrogini_download_app_GooglePlay.png";
const Platform = () => {
  return (
    <div className="ast_download_wrapper ast_toppadder50 ast_bottompadder50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              {/* <!--	<h1>Download Our <span>Mobile App</span></h1> --> */}
              <h1 style={{ fontWeight: "bold" }}>
                Download Our Mobile App & Get 1st Consultation <span>FREE</span>
              </h1>
              <div>&nbsp;</div>
              <h4 style={{ fontWeight: "bold" }}>
                Free Kundli, Daily Horoscope, Panchang, Astrology Signs & Many
                More...
              </h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_download_box">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src={apple}
                      alt="Astrogini iOS App"
                      title="Astrogini iOS App"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={google}
                      alt="Astrogini Android App"
                      title="Astrogini Android App"
                    />
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

export default Platform;
