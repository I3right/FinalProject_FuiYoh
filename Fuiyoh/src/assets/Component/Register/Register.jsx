import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutNormal from "../LayoutNormal/LayoutNormal";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();

  const inputEmail = (email) => {
    setEmail(email.target.value);
  };
  const inputPassword = (password) => {
    setPassword(password.target.value);
  };
  const inputPasswordCheck = (email) => {
    setPasswordCheck(email.target.value);
  };
  const inputDisplayName = (email) => {
    setDisplayName(email.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    alert("Submit alredy");
    // ย้าย path ของ web โดยใช้ navigate
    navigate("/Login");
  };

  const handleClick = () => {
    console.log("Click");
    navigate("/");

    //   console.log(email,password,passwordCheck,displayName)
  };

  return (
    <LayoutNormal>
      <div className="register">
        <form onSubmit={handleSubmit} className="form">
          <h2>Register</h2>

          <div className="input-form">
            <label>
              <div className="input-picture">
                <input type="file" />
                Upload picture
              </div>
            </label>
            <div className="input-field">
              <input
                type="email"
                value={email}
                onChange={(email) => inputEmail(email)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(password) => inputPassword(password)}
                placeholder="Password"
              />
              <input
                type="password"
                value={passwordCheck}
                onChange={(password) => inputPasswordCheck(password)}
                placeholder="Confirm Password"
              />
              <input
                type="text"
                value={displayName}
                onChange={(displayName) => inputDisplayName(displayName)}
                placeholder="Displayname"
              />
            </div>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
          <button onClick={() => handleClick()} className="btn-back">
            Back
          </button>
        </form>
      </div>
    </LayoutNormal>
  );
};

export default Register;
