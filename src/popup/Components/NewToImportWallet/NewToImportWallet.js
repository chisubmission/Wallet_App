import React from 'react';
import Modal from 'react-modal';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faQuestionCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../Components/WalletSetup/WalletSetup.css';
import ImportHelpImproveWallet from '../ImportHelpUsImproveWallet/ImportHelpImproveWallet';


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

const NewToImportWallet = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <div className="import-wallet-container">
        <div>
          <span className="questionIcon" onClick={openModal}><FontAwesomeIcon icon={faQuestionCircle} /></span>
          
          {/* Modal for How does importing a MetaMask wallet works */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={popupStyles}
            contentLabel="Import Modal"
          >
            <div className="importModal">
              <span className="timesIcon" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
              <div className="mt-5 mb-5">
                <h5 className="text-center mt-5 mb-5">How does importing a MetaMask wallet works</h5>
                <ol>
                  <li>If you have an existing account where you backed up your <a href="">seedphrase</a>, simply input the seedphrase to access the account.</li>
                  <li>Create a new password for the MetaMask extension on your computer that is secure.</li>
                  <li>That's it! You're setup on MetaMask and now have access to the account your imported.</li>
                </ol>
              </div>
            </div>
          </Modal>
        </div>
        <div className="mt-2">
          <span className="arrowIcon"><FontAwesomeIcon icon={faArrowDown} /></span>
          <h6 className="have-title">No, I already have a Secret Recovery Phrase</h6>
          <small>Import your existing wallet using a Secret Recovery Phrase</small>
        </div>
        <div>
          <button onClick={() => goTo(ImportHelpImproveWallet)} id="importWalletBtn">Import Wallet</button>
        </div>

      </div>
    </div>
  );
};

export default NewToImportWallet;