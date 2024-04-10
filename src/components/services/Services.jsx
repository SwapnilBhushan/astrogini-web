import React from "react";
import Sv5 from "../../assets/images/content/sv5.png";
import Sv1 from "../../assets/images/content/sv1.png";
import Sv2 from "../../assets/images/content/sv2.png";
import Sv3 from "../../assets/images/content/sv3.png";
import Sv4 from "../../assets/images/content/sv4.png";
import Sv6 from "../../assets/images/content/sv6.png";

const Services = () => {
  return (
    <div className="ast_service_wrapper ast_toppadder40 ast_bottompadder50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>
                Our <span>Services</span>
              </h1>
              <p>
                Astrogini is an online horoscope prediction and astrology
                consultation platform where user can avail free as well as paid
                astrology services like Kundli Making, Kundli Matching, Kundli
                Yog, Kundli Dosh, Kundli Houses, Horoscope Prediction, Daily
                Panchang, Shubh Muhurats, Planetary Transits, Nakshatras Details
                and many other services.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={Sv5} alt="Service" />
              <h4>Birth Journal</h4>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <div className="clearfix"></div>
              <a href="service_single.html" className="ast_btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={Sv6} alt="Service" />
              <h4>Kundli Matching</h4>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <div className="clearfix"></div>
              <a href="service_single.html" className="ast_btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={Sv4} alt="Service" />
              <h4>Kundli Dosh</h4>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <div className="clearfix"></div>
              <a href="service_single.html" className="ast_btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={Sv1} alt="Service" />
              <h4>Kundli Yoga</h4>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <div className="clearfix"></div>
              <a href="service_single.html" className="ast_btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={Sv2} alt="Service" />
              <h4>Palm Reading</h4>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <div className="clearfix"></div>
              <a href="service_single.html" className="ast_btn">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="ast_service_box">
              <img src={Sv3} alt="Service" />
              <h4>Face Reading</h4>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <div className="clearfix"></div>
              <a href="service_single.html" className="ast_btn">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="service_single.html" className="nv-lg_btn">
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
