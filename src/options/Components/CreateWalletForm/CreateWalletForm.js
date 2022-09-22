import React, { useState, useEffect, useRef } from "react";
import "./CreateWalletForm.css";
import * as ReactDOM from "react-dom";
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from "react-chrome-extension-router";
import SecureWalletPage from "../SecureWalletPage/SecureWalletPage";
import video4 from "../../../assets/videos/Strong Passwords.mp4";

const CreateWalletForm = () => {
  const handleChange = (e) => {
    const Password = document.getElementById("password").value;
    const ConfirmPassword = document.getElementById("confirmPassword").value;
    const createWalletBtnOverlay = document.querySelector(
      ".createWalletBtn-overlay"
    );
    const formCheckInput = document.getElementById("formCheckInput");
    const passwordNotEnough = document.getElementById("passwordNotEnough");
    const passwordError = document.getElementById("passwordError");

    // Form Validation.

    let isFormValid = true;
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length >= 8;
      isFormValid = isPasswordValid;
      passwordNotEnough.innerHTML = "";
    }
    if (Password.length < 8) {
      passwordNotEnough.innerHTML = "Password not long enough";
      createWalletBtnOverlay.style.display = "block";
    }
    if (Password !== ConfirmPassword) {
      createWalletBtnOverlay.style.display = "block";
      passwordError.innerHTML = "Password doesn’t match!";

      if (ConfirmPassword === "") {
        createWalletBtnOverlay.style.display = "block";
        passwordError.innerHTML = "";
      }
    }
    if (Password === ConfirmPassword) {
      passwordError.innerHTML = "";
    }
    if (isFormValid && Password === ConfirmPassword) {
      formCheckInput.addEventListener("click", () => {
        createWalletBtnOverlay.style.display = "none";
      });

      if (Password === "") {
        createWalletBtnOverlay.style.display = "block";
      }
    }
  };

  // Function for form submit.
  const handelSubmit = (e) => {
    const Password = document.getElementById("password").value;
    const ConfirmPassword = document.getElementById("confirmPassword").value;

    if (Password === "") {
      alert("Password is required");
      return false;
    }
    if (Password !== ConfirmPassword) {
      return false;
    }
    if (Password === ConfirmPassword) {
      return true;
    }
  };
  const title = useRef();
  useEffect(() => {
    if (title.current) title.current.focus();
  }, []);

  return (
    <div className="container">
      <div class="row">
        <div className="col-md-6">
          <div className="form-container">
            <div className="header-text">
              <h1 tabIndex="1">Create Password</h1>
            </div>

            {/* Create wallet form */}

            <form className="forms" onSubmit={handelSubmit} id="passForm">
              <div class="form-group formGroup">
                <label
                  for="password"
                  aria-label="Enter new password"
                  aria-hidden="true"
                >
                  New password (min 8 chars)
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  minLength="8"
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  required
                />
                <div id="passwordNotEnough"></div>
              </div>
              <div class="form-group formGroup">
                <label
                  for="confirmPassword"
                  aria-label="Confirm new password"
                  aria-hidden="true"
                >
                  Confirm password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="confirmPassword"
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  required
                />
                <div id="passwordError"></div>
              </div>

              <div class="form-check">
                <label class="form-check-label">
                  <span>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      name=""
                      id="formCheckInput"
                      value="checkedValue"
                      required
                    />
                  </span>
                  <span className="terms-checkbox">
                    I have read and agree to the <a href="">Terms of Use</a>
                  </span>
                </label>
              </div>
              <button
                onClick={() => goTo(SecureWalletPage)}
                id="submitBtn"
                type="submit"
              >
                {" "}
                Create{" "}
              </button>

              <br />
              <span className="createWalletBtn-overlay"></span>
            </form>
          </div>
        </div>

        {/* content for help about password */}
        <div className="col-md-6" ref={title} tabIndex="1">
          <div className="help-container">
            <div className="helpvideo-container">
              <video
                controls
                style={{
                  borderRadius: "5px",
                  width: "auto",
                  height: "222px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
                aria-label="Video. Pass phrase Tips"
              >
                <source type="video/webm" src={video4} />
              </video>
            </div>
            <div>
              <h3>Why do i need a password?</h3>
              <p>
                Passwords are an essential first-line defense for your
                information and assets. To keep people from accessing your
                account, passwords with strong conviction are a great way for
                you to keep your assets safe.
              </p>
            </div>
            <div className="tips" aria-flowto="passForm">
              <h3>Helpful Tips</h3>
              <ul>
                <li>Never share your password with anyone.</li>
                <li>
                  Write your password down and store it in a secure location.
                </li>
                <li>Do not reuse a password you already use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWalletForm;
