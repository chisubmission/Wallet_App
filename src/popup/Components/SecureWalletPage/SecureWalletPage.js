import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
import logo from "../../../assets/images/wallet.png";
import './SecureWalletPage.css'
import SecretBackupPhrase from './../SecretBackupPhrase/SecretBackupPhrase';
import video5 from "../../../assets/videos/Your MetaMask Secret Recovery Phrase.mp4"


const SecureWalletPage = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "700px", margin: "auto"}}>
         <div className="header">
             <img src={logo} alt=""/> 
             <h2>MetaMask</h2>
         </div>
         <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58)", marginBottom: "40px"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>
         
         <div class="row">
           <div className="col-sm-6">
             <div className="secure-container">
              <div className="secure-header-text">
                <h1>Secure your wallet</h1>
                <p>Before getting started, watch this short video to learn about your recovery phrase and how to keep your wallet safe.</p>
              </div>
              <div className="secure-video-container">
              <video controls style={{ borderRadius: '5px', width: 'auto', height: '150px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <source
                  type="video/webm"
                  src={video5}
                />
              </video>
              </div>
              <button onClick={() => goTo(SecretBackupPhrase)} id="NextBtn" type="">Next</button>
             </div>
           </div>
           <div className="col-sm-6">
             <div className="secureTips-text-container">
                <h6>What is a recovery phrase?</h6>
                <p>Your recovery phrase is the "master key" to your wallet and funds.</p>
                  
                  
                <h6>How do I save my recovery phrase?</h6>
                <ul>
                  <li>Save in a password manager.</li>
                  <li>Store in a bank vault.</li>
                  <li>Store in a safe-deposit box.</li>
                  <li>Write down and store in multiple secret places.</li>
                </ul>
                  
                  
                <h6>Should I share my recovery phrase?</h6>
                <p>Never, ever share your recovery phrase, even with MetaMask!</p>
                  
                <p>If someone asks for your recovery phrase, they are most likely trying to scam you.</p>
             </div>
           </div>
         </div> 
       </div>
    </>
  );
};

export default SecureWalletPage;