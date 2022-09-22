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
import { faChevronLeft, faLock } from '@fortawesome/free-solid-svg-icons';
import './SeedPhraseEncryptInfo.css'
import SeedPhraseEncryptPin from './../SeedPhraseEncryptPinPage/SeedPhraseEncryptPin';

const SeedPhraseEncryptInfo = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "900px", margin: "auto"}}>
         <div className="header">
             <img src={logo} alt=""/> 
             <h2>MetaMask</h2>
         </div>
         <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58)", marginBottom: "40px"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>
        <div className="Info-container">
          <h1>Seed Phrase Encryption</h1>

          <div className="info-text">
            <p>Rather than physically writing down your seed phrase, you could download your seed phrase to your local computer and have it encrypted. This eliminates the need of having to write down or memorize your seed phrase. Just follow the simple steps below.</p>

            <ol>
              <li>Create a pin that secure your seed phrase.</li>
              <li>Take note or memorize this pin.</li>
              <li>When prompted, input the pin to decrypt your file.</li>
            </ol>
            <br/>
            <button id="ContinueBtn" onClick={() => goTo(SeedPhraseEncryptPin)} type="">Continue</button>

            <div className="progress-mark">
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SeedPhraseEncryptInfo;