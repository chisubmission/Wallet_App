import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import './TransactionHistory.css'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import HistoryView from '../HistoryView/HistoryView';

const customStyles = {
  content: {
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'rgb(110, 110, 110)',
    fontFamily: 'Poppins',
    boxShadow: '0 3px 7px rgba(0, 0, 0, 0.3)'
    // boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
  },
};

const TransactionHistory = (props) => {
  const { _id, date, senderId, receiverId, amount } = props.transaction
  console.log(props);
  
  const [transactionHistoryView, setTransactionHistoryView] = useState([]);

  useEffect(() => {
      fetch(`https://protected-gorge-73198.herokuapp.com/transaction/${_id}`)
        .then((res) => res.json())
        .then((data) => setTransactionHistoryView(data));
    }, []);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <>
      <div className='history-content-container'>
        <div className='row' onClick={openModal}>
          <div className='col-md-1'>
            <div className='paperIconDiv'>
              <FontAwesomeIcon className='pIcon' icon={faPaperPlane} />
            </div>
          </div>
          <div className='col-md-9'>
          <div className='history-content-first'>
            <p>Send</p>
            <p className='date-received'>{date} <span>To: {receiverId.toString().substring(0, 5)}.......{receiverId.toString().substring(38)}</span></p>
          </div>
          </div>
          <div className='col-md-2'>
          <div className='history-content-last'>
            <p>{amount} ETH</p>
            <p>{amount} ETH</p>
          </div>
          </div>
        </div>
        
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='d-flex'>
            <div style={{textAlign: 'left', fontFamily: "Poppins"}}>
              <h6>Send</h6>
            </div>
            <div style={{textAlign: 'right', cursor: 'pointer', marginLeft: 'auto'}}>
              <span onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
            </div>
          </div>
          <div className='mt-4'>
            {
              transactionHistoryView.map(transactionHistorys => <HistoryView key={transactionHistorys.key} transactionHistorys={transactionHistorys}></HistoryView>)
            }
          </div>
        </Modal>
      </div>
    </>
  );
};

export default TransactionHistory;