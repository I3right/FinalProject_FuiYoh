import React from "react";
import LayoutNormal from "../LayoutNormal/LayoutNormal";
import roadCycling from '../../Picture/icon/Login-RoadCycling.svg'
import mainLogo from '../../Picture/icon/logo.svg'
import './Login.css'

const Login = () => {
  return (
    <LayoutNormal>
      <section className="login-form">
        {/* left */}
        <article className="left-login">
          <img src={roadCycling} alt="road-cycling" />
        </article>
        {/* right */}
        <article className="right-login">
          <div className="right-login-box">
            <h1>LOG IN</h1>
            <div className="logo-login">
              <img src={mainLogo} alt="YUNWHANG-logo" />
            </div>

            {/* Input from user */}
            <form>
              <div className="input-login">
                <input id="useremail" type="email" placeholder="email" />
              </div>
              <div className="input-login">
                <input
                  id="userpassword"
                  type="password"
                  placeholder="password"
                />
              </div>
            </form>

            <button id="login-btn" type="button">
              Log In
            </button>
            <button id="back-btn" type="button">
              Back
            </button>
            <div className="or-text">
              <p>OR</p>
            </div>
            <button id="register-btn" type="button">
              Register
            </button>
          </div>
        </article>
      </section>
    </LayoutNormal>
  );
};

export default Login;
