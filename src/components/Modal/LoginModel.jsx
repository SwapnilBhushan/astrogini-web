import React from "react";
import Modal from "react-bootstrap/Modal";

const LoginModel = ({ showLogin, setShowLogin }) => {
  const closeModel = () => {
    setShowLogin(false);
  };
  return (
    <Modal show={showLogin} onHide={closeModel} centered>
      <Modal.Body>
        <h2 style={{ fontWeight: "bold" }}>Login Form</h2>
        <div id="login-dialog" className="zoom-anim-dialog">
          <form>
            <div style={{ marginBottom: 10 }}>
              <input type="text" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>

            <div className="ast_login_data">
              <label className="tp_custom_check" htmlFor="remember_me">
                Remember me
                <input
                  type="checkbox"
                  name="ast_remember_me"
                  value="yes"
                  id="ast_remember_me"
                />
                <span className="checkmark"></span>
              </label>
              <a href="#" style={{ textDecoration: "none", color: "#000" }}>
                Forgot password ?
              </a>
            </div>
            <button type="submit" className="ast_btn">
              Login
            </button>
            <p>
              Create An Account ?{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                SignUp
              </a>
            </p>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModel;
