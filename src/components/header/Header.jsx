import React, { useState, useEffect } from "react";
import "./header.css";
import Modal from "react-bootstrap/Modal";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/mainLogo.png";
import bg from "../../assets/images/slider/astrogini_slider1.jpg";
import BottomHeader from "./BottomHeader";
import product from "../../assets/images/content/Products/thumb1.jpg";
import Slider from "./Slider";
import LoginModel from "../Modal/LoginModel";
import SignupModel from "../Modal/SignupModel";
const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* top header */}
      <div className={`ast_top_header`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_contact_details">
                <ul>
                  <li>
                    <a href="tel:(+91)9554445866">
                      <AddIcCallIcon
                        style={{
                          fontSize: "18px",
                          marginRight: 15,
                          color: "#fecc03",
                        }}
                      />

                      <strong>(+91) 955 444 5866</strong>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@astrogini.net">
                      <EmailIcon
                        style={{
                          fontSize: "18px",
                          marginRight: 5,
                          color: "#fecc03",
                        }}
                      />
                      <strong> support@astrogini.net </strong>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="ast_autho_wrapper">
                <ul>
                  <li onClick={() => setShowLogin(true)}>
                    <a className="popup-with-zoom-anim">
                      <LoginIcon
                        style={{
                          fontSize: "19px",
                          marginRight: 5,
                          color: "#fecc03",
                        }}
                      />
                      <strong> Log In</strong>
                    </a>
                  </li>

                  <li onClick={() => setShowSignup(true)}>
                    <a className="popup-with-zoom-anim" href="#signup-dialog">
                      <PersonAddIcon
                        style={{
                          fontSize: "19px",
                          marginRight: 5,
                          color: "#fecc03",
                        }}
                      />

                      <strong> Sign Up</strong>
                    </a>
                  </li>

                  <li className="ast_search">
                    <a href="javascript:;">
                      <SearchIcon
                        style={{
                          fontSize: "22px",
                          marginRight: 5,
                          color: "#fecc03",
                        }}
                      />
                    </a>
                    <div className="ast_search_field">
                      <form>
                        <input type="text" placeholder="Search Here" />
                        <button type="button">
                          <SearchIcon
                            style={{
                              fontSize: "22px",
                              marginRight: 5,
                              color: "#000",
                            }}
                          />
                        </button>
                      </form>
                    </div>
                  </li>

                  <li className="ast_cart">
                    <a href="javascript:;">
                      <ShoppingCartIcon
                        style={{
                          fontSize: "19px",
                          marginRight: 5,
                          color: "#fecc03",
                        }}
                      />
                    </a>
                    <div className="ast_cart_box">
                      <div className="ast_cart_list">
                        <ul>
                          <li>
                            <div className="ast_cart_img">
                              <img src={product} className="img-responsive" />
                            </div>
                            <div className="ast_cart_info">
                              <a href="#">Yellow Sapphire</a>
                              <p>1 X $20.00</p>
                              <a
                                href="javascript:;"
                                className="ast_cart_remove"
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="ast_cart_img">
                              <img src={product} className="img-responsive" />
                            </div>
                            <div className="ast_cart_info">
                              <a href="#">yantra</a>
                              <p>1 X $10.00</p>
                              <a
                                href="javascript:;"
                                className="ast_cart_remove"
                              >
                                <i className="fa fa-trash"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="ast_cart_total">
                        <p>
                          total<span>$30.00</span>
                        </p>
                      </div>
                      <div className="ast_cart_btn">
                        <button type="button">view cart</button>
                        <button type="button">checkout</button>
                      </div>
                    </div>
                  </li>
                </ul>

                <LoginModel showLogin={showLogin} setShowLogin={setShowLogin} />
                <SignupModel
                  showSignup={showSignup}
                  setShowSignup={setShowSignup}
                />
                {/* <Modal show={showLogin}>
                  <div id="login-dialog" className="zoom-anim-dialog mfp-hide">
                    <h1>Login Form</h1>
                    <form>
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <div className="ast_login_data">
                        <label className="tp_custom_check" for="remember_me">
                          Remember me
                          <input
                            type="checkbox"
                            name="ast_remember_me"
                            value="yes"
                            id="ast_remember_me"
                          />
                          <span className="checkmark"></span>
                        </label>
                        <a href="#">Forgot password ?</a>
                      </div>
                      <button type="submit" classNameName="ast_btn">
                        Login
                      </button>
                      <p>
                        Create An Account ? <a href="#">SignUp</a>
                      </p>
                    </form>
                  </div>
                </Modal> */}

                {/* <Modal show={showSignup}>
                  <div
                    id="signup-dialog"
                    classNameName="zoom-anim-dialog mfp-hide"
                  >
                    <h1>signup form</h1>
                    <form>
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <input type="text" placeholder="Mobile Number" />
                      <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <button type="submit" classNameName="ast_btn">
                        submit
                      </button>
                      <p>
                        Have An Account ? <a href="#">Login</a>
                      </p>
                    </form>
                  </div>
                </Modal> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
