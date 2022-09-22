import React, { useState, useRef, useEffect } from "react";
import * as ReactDOM from "react-dom";
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from "react-chrome-extension-router";
import logo from "../../../assets/images/wallet.png";
import successIcon from "../../../assets/images/image-asset.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCloudUploadAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./ConfirmSecretBackupPhrase.css";
import Modal from "react-modal";
import PinInput from "react-pin-input";
import Congratulations from "./../CongratulationPage/Congratulations";
import SelfFocus from "react-selffocus-element";

// Modal custom css
const popupStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "500px",
  },
};

const ConfirmSecretBackupPhrase = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [pin, setPin] = useState(new Array(6).fill(""));
  const confirmBtnOverlay = document.querySelector(".confirmBtn-overlay");

  // function for pin validation and set pin in state.
  const handleChange = (value, index) => {
    setPin(value);
    console.log(pin);

    if (value.length == 6) {
      confirmBtnOverlay.style.display = "none";
    } else {
      confirmBtnOverlay.style.display = "block";
    }
  };

  // function for pin submit.
  const handelSubmit = () => {};

  // Function for modal content change.
  const modalContentChangeHandler = () => {
    const pinConfirmationModal = document.querySelector(
      ".pin-confirmation-modal"
    );
    // const successContentContainer = document.querySelector(".success-content-container");
    const uploadSecretRecoveryPhraseContainer = document.querySelector(
      ".uploadSecretRecoveryPhrase-container"
    );
    console.log("click modal change");
    let modalChange = true;
    if (modalChange) {
      pinConfirmationModal.style.display = "none";
      uploadSecretRecoveryPhraseContainer.style.display = "block";
    }
  };

  // Function for upload secret recovery phrase change for next.
  const uploadSecretRecoveryPhraseChangeHandler = () => {
    const successContentContainer = document.querySelector(
      ".success-content-container"
    );
    const uploadSecretRecoveryPhraseContainer = document.querySelector(
      ".uploadSecretRecoveryPhrase-container"
    );
    console.log("click modal change");
    let modalChange = true;
    if (modalChange) {
      uploadSecretRecoveryPhraseContainer.style.display = "none";
      successContentContainer.style.display = "block";
    }
  };

  // seed phrase array
  const Phrases = [
    "royal",
    "brother",
    "fantasy",
    "plastic",
    "strong",
    "accuse",
    "quick",
    "boat",
    "estate",
    "carbon",
    "neglect",
    "wave",
  ];

  // const secretBackupPhraseData = ["strong ", "royal ", "fantasy ", "brother ", "quick ", "plastic ", "accuse ", "neglect ", "boat ", "carbon ", "estate ", "wave "]
  const [phraseData, setPhraseData] = useState([]);

  // function for seed phrase data confirmation and set in state.
  const confirmDataInputHandler = (e) => {
    const phraseDataItem = e.target.innerText;
    // .trim().split(/\s+/);
    console.log(phraseDataItem);
    setPhraseData(phraseData.concat(phraseDataItem));

    const confirmSecretBackupPhraseBtnOverlay = document.querySelector(
      ".confirmSecretBackupPhrase-btn-overlay"
    );
    const ConfirmThroughEncrypt = document.querySelector(
      ".Confirm-through-encrypt"
    );
    if (phraseDataItem) {
      confirmSecretBackupPhraseBtnOverlay.style.display = "none";
      ConfirmThroughEncrypt.style.display = "block";
    }
  };

  // Function for file upload.
  const inputFileHandler = () => {
    const fileUploadInput = document.getElementById("fileUploadInput");
    const fileName = document.querySelector(".default-text");
    let RegExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

    fileUploadInput.click();
    fileUploadInput.addEventListener("change", (e) => {
      if (e.target.value) {
        let valueStore = e.target.value.match(RegExp);
        fileName.textContent = valueStore;
      }
    });
  };

  // Function for encrypted file upload alert.
  const fileUploadHandelChange = (e) => {
    const fileUploadInput = document.getElementById("fileUploadInput");
    const uploadNextBtnOverlay = document.querySelector(
      ".uploadNextBtn-overlay"
    );
    const uploadedText = document.querySelector(".uploaded-text");

    if (fileUploadInput === "") {
      uploadNextBtnOverlay.style.display = "block";
    } else {
      uploadNextBtnOverlay.style.display = "none";
    }
    uploadedText.innerHTML = "File uploaded!";
  };

  const confirmTitle = useRef();
  useEffect(() => {
    if (confirmTitle.current) confirmTitle.current.focus();
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ width: "900px", margin: "auto" }}
      >
        <div className="header">
          <img src={logo} alt="" />
          <h2>MetaMask</h2>
        </div>
        <span
          style={{
            cursor: "pointer",
            fontFamily: "Poppins",
            color: "color: rgb(58, 58, 58)",
            marginBottom: "40px",
          }}
          onClick={() => goBack()}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Back
        </span>

        {/* content for confirm secret seed phrase  */}
        <div className="confirm-secret-backup-phrase-container">
          <div className="confirm-secret-backup-phrase-title">
            <h1>Confirm Your Secret Backup Phrase</h1>
            <p>
              Select each word by the order they appear in your seed phrase to
              confirm, or
              <br />
              <button onClick={openModal}>
                Confirm with downloaded encryption file
              </button>
            </p>
          </div>

          <div className="confirm-phrase-input-field mb-3 mt-4">
            {phraseData.map((pd, index) => {
              return <button>{pd}</button>;
            })}
          </div>
          <div className="Confirm-through-encrypt">
            <p>
              Confirm through <span onClick={openModal}>encrypted file</span>
            </p>
          </div>
          <div
            id="confirmPhraseButtonContainer"
            className="confirm-phrase-button-container"
          >
            {Phrases.map((phrase, index) => {
              return (
                <button onClick={confirmDataInputHandler} id="dataText" type="">
                  {phrase}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goTo(Congratulations)}
            id="confirmSecretBackupPhrase-btn"
            type=""
          >
            confirm
          </button>
          <br />
          <span className="confirmSecretBackupPhrase-btn-overlay"></span>
        </div>

        {/* Modal confirm with an encrypted file. */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={popupStyles}
          contentLabel="Import Modal"
        >
          <div className="Confirm-Secret-Backup-Phrase-Modal">
            <div className="pin-confirmation-modal">
              <span className="timesIcon" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </span>

              <div className="pin-confirmation-form-container">
                <div className="pin-title">
                  <h2 ref={confirmTitle} tabIndex="0" role="heading">
                    Confirmation
                  </h2>
                  <SelfFocus>
                    <p>Enter a 6-digit pin to decrypt your seedphrase.</p>
                  </SelfFocus>
                </div>
                <div className="pin-confirmation-form">
                  {/* pin confirmation form */}
                  <form
                    className="pin-forms d-flex justify-content-center"
                    onSubmit={handelSubmit}
                  >
                    <PinInput
                      length={6}
                      initialValue=""
                      onChange={(value, index) => {
                        handleChange(value, index);
                      }}
                      type="password"
                      inputMode="text"
                      style={{ padding: "10px" }}
                      inputStyle={{ borderColor: "grey", borderRadius: "5px" }}
                      inputFocusStyle={{ borderColor: "#037dd6" }}
                      onComplete={(value, index) => {}}
                      autoSelect={true}
                      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                  </form>
                  <button
                    onClick={() => {
                      modalContentChangeHandler();
                    }}
                    className="pin-confirmation-btn"
                    id="confirmBtn"
                    type="submit"
                  >
                    Confirm
                  </button>
                  <br />
                  <div className="d-flex justify-content-center">
                    <span className="confirmBtn-overlay"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* upload secret recovery phrase content */}
            <div className="uploadSecretRecoveryPhrase-container">
              <h2>Upload secret recovery phrase</h2>
              <div class="form-group">
                <SelfFocus>
                  <input
                    onChange={fileUploadHandelChange}
                    type="file"
                    class="form-control"
                    name=""
                    id="fileUploadInput"
                    placeholder=""
                    required
                    hidden
                    aria-label="Upload secret recovery phrase"
                  />
                </SelfFocus>
              </div>
              <div onClick={inputFileHandler} className="upload-area">
                <div className="default-content">
                  <FontAwesomeIcon
                    className="cloudUpload-icon"
                    icon={faCloudUploadAlt}
                  />
                  <br />
                  <small className="default-text">
                    Upload your secret recovery phrase
                  </small>
                  <br />
                  <strong className="uploaded-text"></strong>
                </div>
              </div>
              <button
                onClick={() => {
                  uploadSecretRecoveryPhraseChangeHandler();
                }}
                type="submit"
              >
                Next
              </button>
              <br />
              <div className="d-flex justify-content-center">
                <span className="uploadNextBtn-overlay"></span>
              </div>
            </div>

            {/* modal success content */}
            <div className="success-content-container">
              <div className="success-icon mb-5">
                <img width="100px" src={successIcon} alt="" />
              </div>

              <h4>
                Success! Your pin is correct and your seedphrase <br /> has been
                confirmed.
              </h4>
              <button
                onClick={() => goTo(Congratulations)}
                id="successNextBtn"
                type=""
              >
                Next
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ConfirmSecretBackupPhrase;
