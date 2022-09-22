import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import SelfFocus from "react-selffocus-element";
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
import "./SecretBackupPhrase.css";
import SeedPhraseEncryptInfo from "./SeedPhraseEncryptInfoPage/SeedPhraseEncryptInfo";
import ConfirmSecretBackupPhrase from "../ConfirmSecretBackupPhrase/ConfirmSecretBackupPhrase";

const SecretBackupPhrase = () => {
  // Function for seed phrase show.

  const handleShowPhrase = () => {
    const sBPhrase = document.querySelector(".secret-backup-phrase");
    const lockIconWord = document.querySelector(".lock-icon-word");
    const btnHideOverlay = document.querySelector(".btn-hide-overlay");

    // click event for full seed phrase div.

    let clicked = false;
    if (!clicked) {
      clicked = true;
      sBPhrase.style.backgroundColor = "white";
      sBPhrase.style.opacity = "1";

      lockIconWord.style.color = "none";
      lockIconWord.style.opacity = "0";

      btnHideOverlay.style.display = "none";
      return;
    }
  };

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

        <div class="row">
          {/* Secret backup phrase content */}
          <div className="col-md-7">
            <div className="secret-backup-phrase-container">
              <div className="secret-backup-header-text">
                <SelfFocus>
                  <h1>
                    Secret Backup <br /> Phrase
                  </h1>
                </SelfFocus>
                <p>
                  Your secret backup phrase makes it easy to backup <br /> and
                  restore your account.
                </p>
              </div>

              <div className="secret-warning">
                <p>
                  <span>WARNING:</span> Never disclose your backup phrase.
                  Anyone with this phrase can take your assets forever.
                </p>
              </div>

              <div className="download-encrypted-container mt-4">
                {/* <p>Need an alternative to saving your recovery phrase?</p> */}
                <button
                  id="downloadPhrase"
                  onClick={() => goTo(SeedPhraseEncryptInfo)}
                >
                  Download and encrypt your backup phrase
                </button>

                <span>- Or -</span>
              </div>
            </div>
          </div>

          {/* Tips content and seed phrase download */}
          <div className="col-md-5">
            <div className="tips-container">
              <h5>Tips</h5>
              <p>Store this phrase in a password manager like 1Password.</p>
              <p>
                Write this phrase on a piece of paper and store in a secure
                location. If you want even more security, write it down on
                multiple pieces of paper and store each in 2-3 different
                locations.
              </p>
              <h6>Memorize this phrase.</h6>
            </div>

            <div onClick={handleShowPhrase} className="sBPhraseContainer">
              <div className="secret-backup-phrase">
                <span>
                  strong royal fantasy brother quick plastic accuse neglect boat
                  carbon estate wave
                </span>
              </div>

              <div className="lock-icon-word">
                <span className="lock-icon">
                  <FontAwesomeIcon icon={faLock} />
                </span>{" "}
                <br />
                <small>CLICK HERE TO REVEAL SECRET WORDS</small>
              </div>
            </div>

            <button
              onClick={() => goTo(ConfirmSecretBackupPhrase)}
              id="nextBtn"
              type=""
            >
              Next
            </button>
            <div className="btn-hide-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecretBackupPhrase;
