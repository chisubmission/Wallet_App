import React, { useEffect, useRef } from "react";
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
import BasicPage from "../BasicPage/BasicPage";
import chromeimg from "../../../assets/images/Google_Chrome_icon_(September_2014).svg.png";
import firefoximg from "../../../assets/images/Firefox_logo.png";
import braveimg from "../../../assets/images/brave-logo.png";
import edgeimg from "../../../assets/images/microsoft-edge-logo.png";
import warningImg from "../../../assets/images/331-3312690_warning-icon-hd-png-download_adobespark.png";
import "./PhishingWarningPage.css";

const PhishingWarningPage = () => {
  const warningTitle = useRef();

  useEffect(() => {

    if (warningTitle.current) warningTitle.current.focus();
  }, []);
  return (
    <>
      <div
        className="container-fluid  text-center"
        style={{ width: "900px", margin: "auto" }}
      >
        <div className="phishingWarning-header-title d-flex justify-content-center">
          <div>
            <img width="50px" src={warningImg} alt="" />
          </div>
          <h1 ref={warningTitle} tabIndex="0" role="heading">
            Warning!
          </h1>
        </div>

        <div className="phishingWarning-text" role="section">
          <p role="presentaion">
            There has been a recent spike in phishing attacks due to users{" "}
            <br aria-hidden="true" />
            downloading unofficial MetaMask software from ads.
          </p>
          <h5>
            Only download MetaMask from the official MetaMask{" "}
            <br aria-hidden="true" />
            website (MetaMask.oi) on these verified browsers.
          </h5>
        </div>
        <div
          className="browsers-img d-flex justify-content-center"
          role="section"
        >
          <div>
            <img width="40px" height="42px" src={chromeimg} alt="" />
            <br aria-hidden="true" />
            <small>Chrome</small>
          </div>
          <div>
            <img width="40px" height="42px" src={firefoximg} alt="" />
            <br aria-hidden="true" />
            <small>FireFox</small>
          </div>
          <div>
            <img width="40px" height="42px" src={braveimg} alt="" />
            <br aria-hidden="true" />
            <small>Brave</small>
          </div>
          <div>
            <img
              width="40px"
              height="42px"
              src={edgeimg}
              alt=""
              aria-hidden="true"
            />
            <br aria-hidden="true" />
            <small>Edge</small>
          </div>
        </div>
        <div>
          <button onClick={() => goTo(BasicPage)} role="button" id="gotItBtn">
            Got it
          </button>
        </div>
      </div>
    </>
  );
};

export default PhishingWarningPage;
