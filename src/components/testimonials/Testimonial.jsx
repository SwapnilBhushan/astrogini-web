import React from "react";
import tm1 from "../../assets/images/content/astrogini_tm1.jpg";
import tm2 from "../../assets/images/content/astrogini_tm2.jpg";
import tm3 from "../../assets/images/content/astrogini_tm3.jpg";
import tm4 from "../../assets/images/content/astrogini_tm4.jpg";
import bg from "../../assets/images/background/astrogini_overview_bg.jpg";
import Carousel from "react-bootstrap/Carousel";

const Testimonial = () => {
  return (
    <div className="ast_testimonial_wrapper ast_toppadder50 ast_bottompadder40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1 style={{ fontWeight: "bold" }}>
                What User<span> Says</span>
              </h1>
              <p>
                We are thankful to all our users for giving their valuable
                reviews. From our large user reviews, we are mentioning few of
                them.
              </p>
            </div>
          </div>

          <div className="col-lg-10 col-md-12 col-sm-12 col-12 offset-lg-1 offset-md-0 offset-sm-0 offset-0">
            <div className="ast_testimonials_slider">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <div className="item">
                    <div className="ast_testimonials_slider_box">
                      <img src={tm1} alt="Testimonial" />
                      <div className="ast_testimonials_slider_box_text">
                        <p>
                          When I 1st visited the Astrogini site I thought that
                          their services might not be upto the mark as their
                          prices were low in comparison to other sites, but
                          their services are great. Not disappointed at all.
                        </p>
                        <h4 style={{ fontWeight: "bold" }}>
                          Kavya Singh, <span>Varanasi, India</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="ast_testimonials_slider_box">
                      <img src={tm2} alt="Testimonial" />
                      <div className="ast_testimonials_slider_box_text">
                        <p>
                          Services are great and that to at such a low prices.
                          Other platforms are charging a lot for each services
                          and even not giving a satisfactory results after
                          paying for the services.
                        </p>
                        <h4 style={{ fontWeight: "bold" }}>
                          Shreya Singh, <span>Hardoi, India</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="ast_testimonials_slider_box">
                      <img src={tm1} alt="Testimonial" />
                      <div className="ast_testimonials_slider_box_text">
                        <p>
                          When I 1st visited the Astrogini site I thought that
                          their services might not be upto the mark as their
                          prices were low in comparison to other sites, but
                          their services are great. Not disappointed at all.
                        </p>
                        <h4 style={{ fontWeight: "bold" }}>
                          Kavya Singh, <span>Varanasi, India</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="ast_testimonials_slider_box">
                      <img src={tm3} alt="Testimonial" />
                      <div className="ast_testimonials_slider_box_text">
                        <p>
                          Astrogini have experienced astrologer's, I am saying
                          this because I have used their services multiple times
                          and every time after their suggestions and remedies, I
                          got positive results.
                        </p>
                        <h4 style={{ fontWeight: "bold" }}>
                          Rehan, <span>Delhi, India</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="item">
                    <div className="ast_testimonials_slider_box">
                      <img src={tm4} alt="Testimonial" />
                      <div className="ast_testimonials_slider_box_text">
                        <p>
                          Astrogini have good astrologers and they listen to the
                          problems keenly and then give their proper
                          suggestions, which always tend to go right. Others
                          must give a try.
                        </p>
                        <h4 style={{ fontWeight: "bold" }}>
                          Raj Neer, <span>Mumbai, India</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
