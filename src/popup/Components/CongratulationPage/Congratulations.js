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
import CongratulationImg from "../../../assets/images/congratulation.jpg"
import './Congratulation.css'
import Home from './../Home/Home';


const Congratulations = () => {
  return (
    <>
      <div className="container-fluid" style={{width: "700px", margin: "auto"}}>
         <div className="header">
             <img src={logo} alt=""/> 
             <h2>MetaMask</h2>
         </div>

         <div>
           <img width="100px" src={CongratulationImg} alt=""/>
         </div>
         <div className="congratulation-text-container">
           <div className="congratulation-title">
            <h2>Congratulations</h2>
            <p>You passed the test - keep your secret recovery phrase safe, it's your responsibility!</p>
           </div>
           <div className="congratulation-text">
             <h6>Tips on storing it safely</h6>

             <ul>
               <li>Save a backup in multiple places.</li>
               <li>Never share the phrase with anyone.</li>
               <li>Be careful of phishing! MetaMask will never spontaneously ask for your secret recovery phrase.</li>
               <li>If you need to backup your secret recovery phrase again, you can find it in Settings - Security.</li>
               <li>If you ever have questions or see something fishy, contact our support <a href="">here</a></li>
             </ul>

             <p>*MetaMask can not recover your secret recovery phrase. <a href="">Learn more</a></p>
           </div>
           <button onClick={() => goTo(Home)} id="allDoneBtn" type="">All Done</button>
         </div>
      </div>   
    </>
  );
};

export default Congratulations;