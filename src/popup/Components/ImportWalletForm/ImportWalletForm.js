import React from 'react';
import './ImportWalletForm.css'
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
import Congratulations from '../CongratulationPage/Congratulations';
import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import successIcon from "../../../assets/images/image-asset.png";
import PinInput from 'react-pin-input';

// Modal custom css
const popupStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '500px'
  },
};

const ImportWalletForm = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [userInfo, setUserInfo] = useState([])

  // Function for input change.
  const handleImportWalletChange = (e) => {
    const PasswordValue = document.getElementById("password").value;
    const ConfirmPasswordValue = document.getElementById("confirmPassword").value;
    const PhraseValue = document.getElementById("Phrase").value;
    const createWalletBtnOverlay = document.getElementById("createWalletBtnOverlay");
    const passwordError = document.getElementById("passwordError");
    const formCheckInput = document.getElementById("formCheckInput");
    const passwordNotEnough = document.getElementById("passwordNotEnough");
    const phraseContainWords = document.getElementById("phraseContainWords");
    

    // Phrase Validation.
    const words = PhraseValue.trim().split(/\s+/);

    let ValidPhrase = true;
    if(e.target.name === "phrase"){
      const isPhraseValid = words.length >= 12;
      ValidPhrase = isPhraseValid;
      phraseContainWords.innerHTML= "";

      if(words.length < 12){
        phraseContainWords.innerHTML= "Secret Recovery Phrases contain 12, 15, 18, 21, or 24 words";
        createWalletBtnOverlay.style.display = "block";
      }
    }
    

    // Form Validation.
    let isFormValid = true;
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length >= 8;
      isFormValid = isPasswordValid;
      passwordNotEnough.innerHTML= "";

      if(PasswordValue === ""){
        createWalletBtnOverlay.style.display = "block";
      };
      if(PasswordValue.length < 8){
        passwordNotEnough.innerHTML= "Password not long enough";
        createWalletBtnOverlay.style.display = "block";
      };
    }

    if(PasswordValue !== ConfirmPasswordValue){
      createWalletBtnOverlay.style.display = "block";
      passwordError.innerHTML= "Password doesn’t match!";

      if(ConfirmPasswordValue === ""){
        createWalletBtnOverlay.style.display = "block";
        passwordError.innerHTML= "";
      }
    };
    if(PasswordValue === ConfirmPasswordValue){
      passwordError.innerHTML= ""
    };
    if(ValidPhrase && isFormValid && PasswordValue === ConfirmPasswordValue){
      formCheckInput.addEventListener("click", ()=>{
        createWalletBtnOverlay.style.display = "none";

        if(PhraseValue === ""){
          createWalletBtnOverlay.style.display = "block";
        }
        if(words.length < 12){
          phraseContainWords.innerHTML= "Secret Recovery Phrases contain 12, 15, 18, 21, or 24 words";
          createWalletBtnOverlay.style.display = "block";
        }
        if(words.length >= 12){
          phraseContainWords.innerHTML= "";
        }
        if(PasswordValue.length < 8){
          passwordNotEnough.innerHTML= "Password not long enough";
          createWalletBtnOverlay.style.display = "block";
        };
        if(PasswordValue.length >= 8){
          passwordNotEnough.innerHTML= "";
        };
      });
    };
    if(uploadPhrase.length && isFormValid && PasswordValue === ConfirmPasswordValue){
      formCheckInput.addEventListener("click", ()=>{
        createWalletBtnOverlay.style.display = "none";
        phraseContainWords.innerHTML= "";
        
      });
    };
  };

  // Function for form submit.
  const handelSubmit = (e) => {
    const Password = document.getElementById("password").value;
    const ConfirmPassword = document.getElementById("confirmPassword").value;
    const Phrase = document.getElementById("Phrase").value;

    if(Password === ""){
      alert("Password is required")
      return false;
    };
    if(Password !== ConfirmPassword){
      return false;
    };
    if(Password === ConfirmPassword){
      return true;
    }
    let isFormValid = true;
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length >= 8;
      isFormValid = isPasswordValid;
    }
    if(Phrase && isFormValid && Password === ConfirmPassword){
      return true;
    };

  };


  // Phrase show and hide toggle function.
  const showPhrase = (e) => {
    const show = document.getElementById("Phrase");
    if(show.type === "password"){
      show.type = 'text';
    }else{
      show.type = "password"
    }
    console.log("clicked")
  }

  
  const [uploadPhrase, setUploadPhrase] = useState('');
  const [pin, setPin] = useState(new Array(6).fill(""));
  const confirmBtnOverlay = document.querySelector(".confirmBtn-overlay");

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

  // Function for modal content change.
  const modalContentChangeHandler = () => {
    const pinConfirmationModal = document.querySelector(".pin-confirmation-modal");
    // const successContentContainer = document.querySelector(".success-content-container");
    const uploadSecretRecoveryPhraseContainer = document.querySelector(".uploadSecretRecoveryPhrase-container");
    console.log("click modal change")
    let modalChange = true
    if(modalChange){
      pinConfirmationModal.style.display = "none";
      uploadSecretRecoveryPhraseContainer.style.display = "block"
    }
  }

  // Function for upload secret recovery phrase change for next.
  const uploadSecretRecoveryPhraseChangeHandler = () => {
    const successContentContainer = document.querySelector(".success-content-container");
    const uploadSecretRecoveryPhraseContainer = document.querySelector(".uploadSecretRecoveryPhrase-container");
    console.log("click modal change")
    let modalChange = true
    if(modalChange){
      uploadSecretRecoveryPhraseContainer.style.display = "none";
      successContentContainer.style.display = "block"
    }
  }
  
  // Function for file upload.
  const inputFileHandler = () => {
    const fileUploadInput = document.getElementById("fileUploadInput");
    const fileName = document.querySelector(".default-text");
    let RegExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

    fileUploadInput.click();
    fileUploadInput.addEventListener("change", (e) => {
      if(e.target.value){
        let valueStore = e.target.value.match(RegExp);
        fileName.textContent = valueStore;
      }
    })
  }


  // Function for encrypted file upload alert.
  const fileUploadHandelChange = (e) => {
    const fileUploadInput = document.getElementById("fileUploadInput");
    const uploadNextBtnOverlay = document.querySelector(".uploadNextBtn-overlay");
    const uploadedText = document.querySelector(".uploaded-text");

    if(fileUploadInput === ""){
      uploadNextBtnOverlay.style.display = "block"
    }else{
      uploadNextBtnOverlay.style.display = "none"
    };
     uploadedText.innerHTML = "File uploaded!";
    
  }

  const uploadPhraseHandler = () => {
    const fileUploadInput = document.getElementById('fileUploadInput');
    console.log(fileUploadInput.value)
    setUploadPhrase(fileUploadInput.value);
  }

  return (
    <div className="form-container">
      <div className="header-text">
        <h4>Import an Account with Secret Recovery Phrase</h4>
        <p>Enter your secret phrase here to restore your vault.</p>
      </div>

      <div className='row'>
        <div className='col-sm-6'>
          {/* Import wallet form */}
          <form className="forms" onSubmit={handelSubmit}>
            <div class="form-group formGroup">
              <label for="">Secret Recovery Phrase</label>
              <input type="password" onChange={handleImportWalletChange} name="phrase" id="Phrase" class="form-control" placeholder="Paste Secret Recovery Phrase From Clipboard" aria-describedby="helpId" required/>
              <div id="phraseContainWords"></div>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input onClick={()=> showPhrase()} type="checkbox" class="form-check-input" name="viewPhrase" id="viewPhrase" value="checkedValue"/>
                <span>Show Secret Recovery Phrase</span>
              </label>
            </div>
            <div class="form-group formGroup">
              <label for="">New password (min 8 chars)</label>
              <input type="password" onChange={handleImportWalletChange} name="password" id="password" class="form-control" placeholder="" aria-describedby="helpId" required/>
              <div id="passwordNotEnough"></div>
            </div>
            <div class="form-group formGroup">
              <label for="">Confirm password</label>
              <input type="password" onChange={handleImportWalletChange} name="password" id="confirmPassword" class="form-control" placeholder="" aria-describedby="helpId" required/>
              <div id="passwordError"></div>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <span><input type="checkbox" class="form-check-input" name="" id="formCheckInput" value="checkedValue" required/></span>
                <span className="terms-checkbox">I have read and agree to the <a href="">Terms of Use</a></span>
              </label>
            </div>
            <span onClick={() => goTo(Congratulations)}><input id="submitBtn" type="submit" value={ 'Import'}/></span>
            <br/><span className="createWalletBtn-overlay" id="createWalletBtnOverlay" ></span>
          </form>
        </div>

        <div className='col-sm-1 text-center'>
          <h4 style={{marginTop: '40px'}}>Or</h4>
        </div>

        <div className='col-sm-5 text-center'>
          <button className='confirmUploadBtn mt-4' onClick={openModal}>Confirm with downloaded encryption file</button> 
        </div>
      </div>
      
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={popupStyles}
          contentLabel="Import Modal"
        >
          <div className="Confirm-Secret-Backup-Phrase-Modal">
            <div className="pin-confirmation-modal">
              <span className="timesIcon" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
              
              <div className="pin-confirmation-form-container">
                <div className="pin-title">
                  <h2>Confirmation</h2>
                  <p>Enter a 6-digit pin to decrypt your seedphrase.</p>
                </div>
                  <div className="pin-confirmation-form">
                    {/* pin confirmation form */}
                    <form className="pin-forms d-flex justify-content-center" onSubmit={handelSubmit}>
                      <PinInput 
                        length={6} 
                        initialValue=""
                        onChange={(value, index) => {handleChange(value, index)}} 
                        type="numeric" 
                        inputMode="text"
                        style={{padding: '10px'}}  
                        inputStyle={{borderColor: 'grey', borderRadius: "5px"}}
                        inputFocusStyle={{borderColor: '#037dd6'}}
                        onComplete={(value, index) => {}}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                      />
                    </form>
                    <button onClick={() => {modalContentChangeHandler()}} className="pin-confirmation-btn" id="confirmBtn" type="submit">Confirm</button>
                    <br/>
                    <div className="d-flex justify-content-center">
                      <span className="confirmBtn-overlay" ></span>
                    </div>
                  </div>
              </div>
            </div>

            {/* upload secret recovery phrase content */}
            <div className="uploadSecretRecoveryPhrase-container">
              <h2>Upload secret recovery phrase</h2>
              <div class="form-group">
                <input onChange={fileUploadHandelChange} type="file" class="form-control" name="" id="fileUploadInput" placeholder="" required hidden/>
              </div>
              <div onClick={inputFileHandler} className="upload-area">
                <div className="default-content">
                  <FontAwesomeIcon className="cloudUpload-icon" icon={faCloudUploadAlt} />
                  <br/>
                  <small className="default-text">Upload your secret recovery phrase</small>
                  <br/>
                  <strong className='uploaded-text'></strong>
                </div>
              </div>
              <button onClick={() => {uploadSecretRecoveryPhraseChangeHandler()}} type="submit">Next</button>
              <br/>
                <div className="d-flex justify-content-center">
                  <span className="uploadNextBtn-overlay" ></span>
                </div>
            </div>

            {/* modal success content */}
            <div className="success-content-container">
              <div className="success-icon mb-5">
                <img width="100px" src={successIcon} alt=""/>
              </div>

              <h4>Success! Your pin is correct and your seedphrase <br/> has been confirmed.</h4>
              <button onClick={() => goTo(Congratulations)} id="successNextBtn" type="">Next</button>
            </div>
          </div>
        </Modal>
    </div>
  );
};

export default ImportWalletForm;