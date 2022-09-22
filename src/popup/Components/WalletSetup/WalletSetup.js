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

import './WalletSetup.css';
import logo from "../../../assets/images/wallet.png"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewToImportWallet from './../NewToImportWallet/NewToImportWallet';
import NewToCreateWallet from '../NewToCreateWallet/NewToCreateWallet';
// import NewToImportWallet from '../../Components/NewToImportWallet/NewToImportWallet';
// import NewToCreateWallet from '../../Components/NewToCreateWallet/NewToCreateWallet';


const WalletSetup = () => {
  return (
    <div className="container-fluid" style={{width: "700px", margin: "auto"}}>
      <div className="header">
          <img src={logo} alt=""/> 
          <h2>MetaMask</h2>
        </div>

        <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58);"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>

        <div className="walletSetup-container mt-4">
          <h2>New to MetaMask?</h2>
          <div className="row">
            <div className="col-sm-6">
              <NewToImportWallet/>
            </div>
            <div className="col-sm-6">
              <NewToCreateWallet/>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default WalletSetup;