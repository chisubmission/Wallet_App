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
import downloadIcon from "../../../../assets/images/download icon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './SeedPhraseDownload.css'
import SeedPhraseDownloadSuccess from './../SeedPhraseDownloadSuccess/SeedPhraseDownloadSuccess';
const CryptoJS = require("crypto-js");



const SeedPhraseDownload = () => {

  // Function for encrypt and download secret backup phrase.
  const downloadSecretPhraseTxtFile = (e) => {
    const secretPhrase = ["strong ", "royal ", "fantasy ", "brother ", "quick ", "plastic ", "accuse ", "neglect ", "boat ", "carbon ", "estate ", "wave "]
    const element = document.createElement("a");
    const file = new Blob([CryptoJS.SHA512(secretPhrase)], {type: "text/plain"});
    element.href = URL.createObjectURL(file);
    element.download ="Secret Phrase";
    document.body.appendChild(element);
    element.click();
  }


  return (
    <>
      <div className="container-fluid" style={{width: "700px", margin: "auto"}}>
         <div className="header">
             <img src={logo} alt=""/> 
             <h2>MetaMask</h2>
         </div>
         <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58)", marginBottom: "40px"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>
        <div className="download-container">
          <h1>Seed Phrase Encryption</h1>

          <div className="Phrase-download-container">
            <div className="icon d-flex justify-content-center mb-4">
            <img width="100px" src={downloadIcon} alt=""/>
            </div>
            <div className=" d-flex justify-content-center mb-4">
               <h5>Now that you have setup your pin, you may now download <br/> your encrypted seed phrase to your device.</h5>
            </div>
          
            <span onClick={() => goTo(SeedPhraseDownloadSuccess)}>
            <button onClick={downloadSecretPhraseTxtFile} id="downloadBtn" type="submit">Download</button>
            </span>
            
            <div className="d-flex justify-content-center">
              <span onClick={() => goBack()} className="spedOne"></span>
              <span onClick={() => goBack()} className="spedTwo"></span>
              <span className="spedThree"></span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SeedPhraseDownload;