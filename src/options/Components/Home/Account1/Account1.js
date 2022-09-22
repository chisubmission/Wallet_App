import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPen, faPodcast, faShareSquare, faThLarge, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Account1.css";
import Overlay from "react-overlay-component";
import qrCodeImg from "../../../../assets/images/qr_code_PNG25.png";
import userIcon from "../../../../assets/images/950771.png";
import video8 from "../../../../assets/videos/What are Private Keys and Addresses_.mp4"
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { usePopperTooltip } from 'react-popper-tooltip';
import SelfFocus from "react-selffocus-element";
import 'react-popper-tooltip/dist/styles.css';


const Account1 = () => {

  // Function for dropdown menu
  let toggled = false;
	const accountMenuToggle =()=>{
		if(!toggled){
			toggled = true;
			document.querySelector(".list").style.display = "block";
			return;
		}
		if(toggled){
			toggled = false;
			document.querySelector(".list").style.display = "none";
			return;
		}
	}
  
  const [expand, setExpand] = useState(false)
  const [isOpen, setOverlay] = useState(false)
  const closeOverlay = () => setOverlay(false)

  // overlay configs
  const configs = {
    animate: true,
    showCloseIcon: false,
    focusOutline: true,
  }

  const [isOpen1, setOverlay1] = useState(false)
  const closeOverlay1 = () => setOverlay1(false)
  const configs1 = {}

  // Function for private key content change and password confirm
  const privateInputKeyHandler = (e) => {
    const insideModalInput3Container = document.querySelector(".inside-modal-input3-container");
    const insideModalInput2Container = document.querySelector(".inside-modal-input2-container");
    const insideModalDoneBtn = document.getElementById("insideModalDoneBtn");
    const insideModalConfirmBtn = document.getElementById("insideModalConfirmBtn");
    const insideModalCancelBtn = document.getElementById("insideModalCancelBtn");

    insideModalInput2Container.style.display = "none";
    insideModalInput3Container.style.display = "block";
    insideModalDoneBtn.style.display="block";
    insideModalConfirmBtn.style.display="none";
    insideModalCancelBtn.style.display="none";
  }

  // Function for Password validation
  const passHandleChange = (e) => {
    const insideModalConfirmBtn = document.getElementById("insideModalConfirmBtn");

    let isFormValid = true;
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length >= 8;
      isFormValid = isPasswordValid;
    }
    if(isFormValid){
      insideModalConfirmBtn.disabled = false;
    }else{
      insideModalConfirmBtn.disabled = true;
    }
  };

  // tooltip
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  // Function for tooltip
  const tooltipHandler = () => {
    const CopyToClipboardText = document.querySelector(".CopyToClipboard-text");
    const CopiedText = document.querySelector(".copied-test");
    // const accountNameId = document.querySelector(".account-name-id");

    CopyToClipboardText.style.display = "none";
    CopiedText.style.display = "block";
  }

  
  return (
    <>
      <div className="Account1">
        {/* Account info clipboard */}
        <CopyToClipboard text={"0xf903672195F12a02b8fB5fC03E9E3421D13b5458"}
        onCopy={() => this.setState({copied: true})}>
          <div className="clipboard-container">
            <div onClick={tooltipHandler} className="account-name-id" ref={setTriggerRef}>
            <SelfFocus>
            <h5>Account 1</h5>
            </SelfFocus>
              {/* <CopyToClipboard text={"0x3d4a109736D6b5436bc61321c93a43C0A21F02E1"}
                onCopy={() => this.setState({copied: true})}> */}
                <small>0xf90...5458</small>
              {/* </CopyToClipboard> */}
            </div>
            {visible && (
              <div
                ref={setTooltipRef}
                {...getTooltipProps({ className: 'tooltip-container' })}
              >
                <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                <span className="CopyToClipboard-text">Copy To Clipboard</span>
                <span className="copied-test">Copied!</span>
              </div>
            )}
          </div>
        </CopyToClipboard>

        {/* Account menu content */}
        <div className="accountMenu">
            <label onClick={accountMenuToggle} className="menuBarClick"><FontAwesomeIcon className="menuIcon" icon={faEllipsisV} /></label>
            <div className="mt-4">
              <div className="list">
                  <button onClick={() => {setOverlay(true)}} className="links"><span className="listMenuIcon"><FontAwesomeIcon  icon={faThLarge} /></span> Account Details</button>
                  <button className="links"><span className="listMenuIcon"><FontAwesomeIcon  icon={faShareSquare} /></span> View on Etherscan</button>
                  <button className="links"><span className="listMenuIcon"><FontAwesomeIcon  icon={faPodcast} /></span> Connected Sites</button>
              </div>
            </div>
        </div>
      </div>
      
      {/* Modal for Account Details */}
      <Overlay style={{border: 'none'}} className="overlay-container" configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div className="userIcon-container d-flex justify-content-right">
          <img width="60px" src={userIcon} alt=""/>
        </div>
        <div className="d-flex justify-content-right">
          <button
            className="setOverlayFalse"
            onClick={() => {
              setOverlay(false)
            }}
          >
            <FontAwesomeIcon  icon={faTimes} />
          </button>
        </div>

        {/* Modal for export private key and show private key content start*/}
        <Overlay configs={configs1} isOpen={isOpen1} closeOverlay={closeOverlay1}>
          <div class="row">
            <div className="col-md-6">
                <div className="insideModal-content-container">
                  <div>
                    <div className="d-flex justify-content-center">
                      <img width="60px" src={userIcon} alt=""/>
                    </div>
                    <h6 className="head-title d-flex justify-content-center">Account 1</h6>
                    <div className="inside-modal-input1">
                    <small>0xf903672195F12a02b8fB5fC03E9E3421D13b5458</small>
                    </div>
                  </div>
                  
                  <div>
                    <div className="private-key-input-container">
                      <h6 className="mt-4">Show private keys</h6>
                      <div className="inside-modal-input2-container">
                        <label for="">Type your MetaMask password</label>
                        <input onChange={passHandleChange} type="password" name="password" id="password" className="inside-modal-input2" placeholder="" required/>
                        
                      </div>
                      
                      <div className="inside-modal-input3-container">
                        <small for="">This is your private key (Click to copy)</small>
                        <div className="inside-modal-input3">
                        <p>ebcdad9363c2b182140433629af19755 <br/>5793453728e5f6b88ff91bf45eb527b7</p>
                        </div>
                      </div>
                    </div>

                    <div className="warning d-flex justify-content-center">
                      <p>Warning: Never disclose this key. Anyone with your private keys steal any assets held in your account.</p>
                    </div>
                    <div className="insideModal-cancel-confirm-btn d-flex justify-content-center">
                      <button onClick={() => {setOverlay(false)}} id="insideModalCancelBtn" type="">Cancel</button>
                      <span onClick={privateInputKeyHandler}>
                        <button id="insideModalConfirmBtn" disabled="disabled" type="">Confirm</button>
                      </span>
                      <button onClick={() => {setOverlay(false)}} id="insideModalDoneBtn" type="">Done</button>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
              <div className="inside-module-video-container">
                <div className="inside-modal-video">
                <video controls style={{ borderRadius: '5px', width: '250px', height: 'auto', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                <source
                  type="video/webm"
                  src={video8}
                />
              </video>
                  </div>
                  <div className="what-isIt-container">
                    <h6>What is it?</h6>
                    <p>The private key like a password that unlocks the bank account holding your money, You and only you, should know what the password is.</p>
    
                    <h6>Why do i need it?</h6>
                    <p>Private keys allow the owner to access and manage any funds send to their respective address.</p>
    
                    <h6>Can i share it with anyone else?</h6>
                    <p>Never share your private key with anyone, Ever if someone gets access to your private key, they can control all of your assets</p>
                  </div>
              </div>
            </div>
          </div>
        </Overlay>
        {/* Modal for export private key and show private key content end */}

        
        <div style={{ textAlign: "center" }}>
          <h5 className="head-title">Account 1 <FontAwesomeIcon  icon={faPen} /></h5>
          <div className="qrCodeImg">
            <img width="150px" src={qrCodeImg} alt=""/>
          </div>
          <div className="qrCodeInputInput-container mb-4">
            <div id="qrCodeInput">
              <small>0xf903672195F12a02b8fB5fC03E9E3421D13b5458</small>
            </div>
          </div>
          
          <button className="viewEthBtn" type="">View on Etherscan</button>
          <br/>
          <button id="exportPrivetKeyBtn" onClick={() => {setOverlay1(true)}} type="">Export Private Key</button>
        </div>
      </Overlay>
    </>
  );
};

export default Account1;