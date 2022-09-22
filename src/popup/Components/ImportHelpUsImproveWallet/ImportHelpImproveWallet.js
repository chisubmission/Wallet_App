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
import logo from "../../../assets/images/wallet.png";
import metricsChart from "../../../assets/images/metrics-chart.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './ImportHelpUsImproveWallet.css'
import ImportWallet from './../ImportWallet/ImportWallet';

const ImportHelpImproveWallet = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "700px", margin: "auto"}}>
        <div className="header">
          <img src={logo} alt=""/> 
          <h2>MetaMask</h2>
        </div>
        <div className="matricsChart-img">
          <img width="80px" src={metricsChart} alt=""/>
        </div>
        <div className="helpUsImproveWallet-container">
          <div className="HelpUsImproveWallet-title">
            <h1>Help us improve MetaMask</h1>
          </div>
          <div className="improve-help-text">
            <p>MetaMask would like to gather usage data to better understand how our users interact with the extension. This data will be used to continually improve the usability and user experience of our product <br/>and the Ethereum ecosystem.</p>
            <p>MetaMask will..</p>
            <p><FontAwesomeIcon icon={faCheck} className="checkIcon"/> Always allow you to opt-out via Settings. <br/><FontAwesomeIcon icon={faCheck} className="checkIcon"/> Send anonymized click & pageview events.</p>
            <p><FontAwesomeIcon icon={faTimes} className="redTimes-icon"/> <span>Never</span> collect keys, addresses, transactions, balances, hashes, or any personal information<br/>
            <FontAwesomeIcon icon={faTimes} className="redTimes-icon"/> <span>Never</span> collect your full IP address <br/>
            <FontAwesomeIcon icon={faTimes} className="redTimes-icon"/> <span>Never</span> sell data for profit. Ever!
            </p>
          </div>
          <button onClick={() => goTo(ImportWallet)} id="noThanksBtn" type="">No Thanks</button>
          <button onClick={() => goTo(ImportWallet)} id="agreeBtn" type="">I Agree</button>

          <div className="policy-container">
            <p>This data is aggregated and is therefore anonymous for the purposes of General Data <br/>Protection Regulation (EU) 2016/679. For more information in relation to our privacy practices,<br/>please see our <a className="policy-link" href="">Privacy Policy here</a>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportHelpImproveWallet;