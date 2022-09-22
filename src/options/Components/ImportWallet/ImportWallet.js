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
import ImportWalletForm from '../ImportWalletForm/ImportWalletForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../assets/images/wallet.png"

const ImportWallet = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "900px", margin: "auto"}}>
        <div className="header">
            <img src={logo} alt=""/> 
            <h2>MetaMask</h2>
        </div>
        <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58);"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>
        <ImportWalletForm/>
      </div>
    </>
  );
};

export default ImportWallet;