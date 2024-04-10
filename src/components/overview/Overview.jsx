import React from "react";

const Overview = () => {
  return (
    <div className="ast_overview_wrapper ast_toppadder60 ast_bottompadder60">
      <div className="ast_img_overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>
                <span style={{ color: "#ffffff" }}>Daily Planetary</span>
                <span> Overview</span>
              </h1>
              <div>&nbsp;</div>
              <p style={{ textAlign: "justify" }}>
                <span style={{ color: "#ffffff" }}>
                  A "Daily Planetary Overview" provides a brief summary or
                  analysis of the positions and movements of the planets within
                  the solar system on a given day, particularly within the
                  context of astrology. Astrologers believe that the positions
                  of celestial bodies such as the Sun, Moon, planets, and stars
                  at the time of a person's birth, as well as their current
                  positions, can influence events and characteristics of
                  individuals and society.
                </span>
              </p>
            </div>
            <div className="text-center">
              <a href="service_single.html" className="nv-lg_btn">
                Know More
              </a>
            </div>
            {/* <!--
            <div class="ast_overview_info">
                <h1>Daily Planetary <span> Overview</span></h1>
                <p>A "Daily Planetary Overview" provides a brief summary or analysis of the positions and movements of the planets within the solar system on a given day, particularly within the context of astrology. Astrologers believe that the positions of celestial bodies such as the Sun, Moon, planets, and stars at the time of a person's birth, as well as their current positions, can influence events and characteristics of individuals and society.</p>
            </div>
            --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
