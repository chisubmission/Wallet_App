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
import { faPlus, faQuestionCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../Components/WalletSetup/WalletSetup.css';
import video9 from "../../../assets/videos/Introducing MetaMask Swaps for Mobile and Desktop.mp4"
import CreateHelpImproveWallet from './../CreateHelpImproveWallet/CreateHelpImproveWallet';


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
    height: '500px',
    paddingTop: "2px"
  },
};

const NewToCreateWallet = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <div className="Create-wallet-container">
        <div>
          <span className="questionIcon" onClick={openModal}><FontAwesomeIcon icon={faQuestionCircle} /></span>
          
          {/* Modal For How does MetaMask wallet work. */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={popupStyles}
            contentLabel="Create Modal"
          >
            <div id="createModal">
              <span className="timesIcon" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
              <div className="mb-4">
                <h5 className="text-center mt-2 mb-3">How does MetaMask wallet work</h5>
                <div className="howMetaMask-walletWork-videoContainer mb-2">
                <video controls style={{ borderRadius: '5px', width: '280px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                  <source
                    type="video/webm"
                    src={video9}
                  />
                </video>
                </div>
                <div>
                  <div className="howMetaMask-walletWork-videoContainer-list">
                    <div className="icon-dollarSign">
                      <span><i class="bi bi-currency-dollar"></i></span>
                    </div> 
                    <div>
                    <p>MetaMask is a decentralized wallet that stores different assets on the Ethereum blockchain. This includes coins, tokens, and NFTs</p>
                    </div>
                  </div>
                  <div className="howMetaMask-walletWork-videoContainer-list">
                    <div className="icon-globe">
                    <span><i class="bi bi-globe"></i></span>
                    </div> 
                    <div>
                    <p>With MetaMask, you can access other decentralized applications on the Web3.0 through your browser.</p>
                    </div>
                  </div>
                  <div className="howMetaMask-walletWork-videoContainer-list">
                    <div className="icon-lock">
                      <span><i class="bi bi-lock"></i></span>
                    </div>  
                    <div>
                    <p> MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        
        <div className="mt-2">
          <span className="plusIcon"><FontAwesomeIcon icon={faPlus} /></span>
          <h6 className="setup-title">Yes, let’s get set up!</h6>
          <small>This will create a new wallet and Secret Recovery Phrase</small>
        </div>
        <div>
          <button onClick={() => goTo(CreateHelpImproveWallet)} id="createWalletBtn">Create Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default NewToCreateWallet;