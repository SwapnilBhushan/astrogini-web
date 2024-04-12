import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeOpen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactDetail = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="ast_contact_wrapper ast_toppadder70 ast_bottompadder50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading">
              <h1>
                get in <span>touch</span>
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected hummer.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <div className="ast_contact_info">
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  aria-hidden={true}
                  className="fa-icon"
                />
              </span>
              <h4>phone</h4>
              <p>
                <a href="tel:(+91)9554445866">(+91) 955 444 5866</a>
                <br />
                <a href="tel:(+91)9554445866">(+91) 955 444 5866</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <div className="ast_contact_info">
              <span>
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  aria-hidden={true}
                  className="fa-icon"
                />
              </span>
              <h4>email</h4>
              <p>
                <a href="mailto:support@astrogini.net">support@astrogini.net</a>
                <br />
                <a href="mailto:info@astrogini.net">info@astrogini.net</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <div className="ast_contact_info">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="fa-icon"
                  aria-hidden={true}
                />
              </span>
              <h4>address</h4>
              <p>Astrogini Services Pvt. Ltd. Lucknow, UP, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
