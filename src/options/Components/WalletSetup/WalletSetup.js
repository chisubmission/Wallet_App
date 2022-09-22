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

import "./WalletSetup.css";
import logo from "../../../assets/images/wallet.png";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewToImportWallet from "./../NewToImportWallet/NewToImportWallet";
import NewToCreateWallet from "../NewToCreateWallet/NewToCreateWallet";
// import NewToImportWallet from '../../Components/NewToImportWallet/NewToImportWallet';
// import NewToCreateWallet from '../../Components/NewToCreateWallet/NewToCreateWallet';

const WalletSetup = () => {
  const title = useRef();

  useEffect(() => {
    if (title.current) title.current.focus();
  }, []);

  return (
    <div className="container-fluid" style={{ width: "900px", margin: "auto" }}>
      <div className="header">
        <img src={logo} alt="" />
        <h2>MetaMask</h2>
      </div>

      <span
        style={{
          cursor: "pointer",
          fontFamily: "Poppins",
          color: "color: rgb(58, 58, 58);",
        }}
        onClick={() => goBack()}
      >
        <FontAwesomeIcon icon={faChevronLeft} /> Back
      </span>

      <div className="walletSetup-container mt-4">
        <h2 ref={title} tabIndex="0" aria-label="Question, New to MetaMask?">New to MetaMask?</h2>
        <div className="row">
          <div className="col-md-6" role="section" aria-label="I aleady have a secret recovery prase">
            <NewToImportWallet />
          </div>
          <div className="col-md-6" role="section" aria-label="I'm new to MetaMask, let’s get set up!">
            <NewToCreateWallet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSetup;
