import { Mode } from "@mui/icons-material";
import React from "react";
import Modal from "react-bootstrap/Modal";

const SignupModel = ({ showSignup, setShowSignup }) => {
  const closeModel = () => {
    setShowSignup(false);
  };
  return (
    <Modal show={showSignup} onHide={closeModel} centered>
      <Modal.Body>
        <h2 style={{ fontWeight: "bold" }}>Signup</h2>
        <div id="signup-dialog" className="zoom-anim-dialog">
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Mobile Number" />
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <button type="submit" className="ast_btn">
              submit
            </button>

            <p>
              Have An Account ?{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Login
              </a>
            </p>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModel;
