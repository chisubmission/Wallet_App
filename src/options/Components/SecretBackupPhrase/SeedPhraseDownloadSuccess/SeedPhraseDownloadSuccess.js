import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';
import logo from "../../../../assets/images/wallet.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import successIcon from "../../../../assets/images/image-asset.png";
import ConfirmSecretBackupPhrase from '../../ConfirmSecretBackupPhrase/ConfirmSecretBackupPhrase';
import "./SeedPhraseDownloadSuccess.css"

const SeedPhraseDownloadSuccess = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "900px", margin: "auto"}}>
        <div className="header">
          <img src={logo} alt=""/> 
          <h2>MetaMask</h2>
        </div>
        <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58)", marginBottom: "40px"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>
        <div className="download-container">
          <h1>Seed Phrase Encryption</h1>
        </div> 
        <div className="Phrase-download-success-container">
        <div className="success-icon mb-5">
                <img width="100px" src={successIcon} alt=""/>
              </div>

              <h4>All set! Your seed phrase was successfully <br/> encrypted and downloaded to your device.</h4>
              <button onClick={() => goTo(ConfirmSecretBackupPhrase)} id="successNextBtn" type="">Next</button>
        </div>
      </div> 
    </>
  );
};

export default SeedPhraseDownloadSuccess;