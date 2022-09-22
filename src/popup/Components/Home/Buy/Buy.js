import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import './Buy.css';
import wyre from '../../../../assets/images/wyre-payments-logo-7263DCB4A9-seeklogo.com.png';
import Eth from '../../../../assets/images/628px-Ethereum_logo_2014.svg.png';
import video6 from "../../../../assets/videos/Defining Ether and Ethereum.mp4";


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

const Buy = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }


  
  return (
    <>
      <div className="buy-send-swap text-center">
        <div onClick={openModal} className="buy"><FontAwesomeIcon className="icons" icon={faDownload} /></div>
        <p>Buy</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={popupStyles}
        contentLabel="Import Modal"
      >
        <div className="buy-modal-container">
          <div className="buy-modal-header d-flex">
            <div className="buy-header-title">
              <h5>Deposit Ether</h5>
              <p>To interact with decentralized applications using MetaMask, you'll need Ether in your wallet.</p>
            </div>
            <span className="buy-modal-times-Icon" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
          </div>
          <div className="buy-modal-content">
            <div class="row">
              <div className="col-sm-6">
                <div className="buy-modal-video-container">
                <video controls style={{ borderRadius: '5px', width: '250px', height: 'auto', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
                  <source
                    type="video/webm"
                    src={video6}
                  />
                </video>
                </div>
                <div className="buy-modal-text">
                  <h6>What is Ether?</h6>
                  <p>Ether is Ethereum's native cryptocurrency. All transactions and activity on the Ethereum blockchain require Ether to process.</p>

                  <h6>Why do I need Ether?</h6>
                  <p>When you send ETH or use an Ethereum application, you'll pay a small fee in ETH to use the Ethereum network, This fee is an incentive for a miner to process and verify what you're trying to do.</p>
                </div>
              </div>
              <div className="col-sm-6" style={{borderLeft: "1px solid gainsboro"}}>
                <div className="buy-eth-with-wyre d-flex">
                  <div className="wyre-img d-flex align-items-center">
                    <img width="100px" src={wyre} alt=""/>
                  </div>
                    <div className="wyre-text">
                      <h6>Buy ETH with Wyre</h6>
                      <small>Wyre lets you use a debit card to deposit ETH right in your MetaMask account.</small>
                      <br/>
                      <button id="wyreBtn" type="">Continue to Wyre</button>
                    </div>
                </div>
                <div className="directly-deposit-ether d-flex">
                  <div className="eth-img d-flex align-items-center">
                    <img width="50px" src={Eth} alt=""/>
                    <div className="eth-plus-icon">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  
                    <div className="eth-text">
                      <h6>Directly Deposit Ether</h6>
                      <small>If you already have some Ether, the quickest way to get Ether in your new wallet by direct deposit.</small>
                      <br/>
                      <button id="ethBtn" type="">View Account</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Buy;