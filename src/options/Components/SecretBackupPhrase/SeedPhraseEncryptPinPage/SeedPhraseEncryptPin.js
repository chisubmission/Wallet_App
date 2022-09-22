import React, { useState } from 'react';
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
import SeedPhraseDownload from './../SeedPhraseDownloadPage/SeedPhraseDownload';
import PinInput from 'react-pin-input';
import './SeedPhraseEncryptPin.css'



const SeedPhraseEncryptPin = () => {
  const confirmBtnOverlay = document.querySelector(".confirmBtn-overlay");

  // state for set pin.
  const [pin, setPin] = useState(new Array(6).fill(""));


  // function for pin validation and set pin in state.
  const handleChange = (value, index)=>{

    setPin(value);
    console.log(pin);

    if(value.length == 6){
      confirmBtnOverlay.style.display = "none";
    }else{
      confirmBtnOverlay.style.display = "block";
    }
  }

  // function for pin submit.
  const handelSubmit = () => {}
  
  return (
    <>
      <div className="container-fluid" style={{width: "900px", margin: "auto"}}>
         <div className="header">
             <img src={logo} alt=""/> 
             <h2>MetaMask</h2>
         </div>
         <span style={{cursor: "pointer", fontFamily: "Poppins", color: "color: rgb(58, 58, 58)", marginBottom: "40px"}} onClick={() => goBack()}><FontAwesomeIcon icon={faChevronLeft} /> Back</span>
        <div className="Pin-container">
          <h1>Seed Phrase Encryption</h1>

          <div className="pin-create-form-container">
            <div className="pin-title">
              <h2>Create a Pin</h2>
              <p>Enter a 6-digit pin to secure your seed phrase</p>
            </div>
              <div className="pin-create-form">
                <form className="pin-forms d-flex justify-content-center" onSubmit={handelSubmit}>
                  <PinInput 
                    length={6} 
                    initialValue=""
                    onChange={(value, index) => {handleChange(value, index)}} 
                    type="password" 
                    inputMode="text"
                    style={{padding: '10px'}}  
                    inputStyle={{borderColor: 'grey', borderRadius: "5px"}}
                    inputFocusStyle={{borderColor: '#037dd6'}}
                    onComplete={(value, index) => {}}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </form>
                
                <button onClick={() => goTo(SeedPhraseDownload)} id="confirmBtn" type="submit">Confirm</button>
                <br/>
                <div className="d-flex justify-content-center">
                  <span className="confirmBtn-overlay" ></span>
                </div>
                
              </div>
            
            
            <div className="pinPage-progress-mark d-flex justify-content-center">
              <span onClick={() => goBack()} className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SeedPhraseEncryptPin;