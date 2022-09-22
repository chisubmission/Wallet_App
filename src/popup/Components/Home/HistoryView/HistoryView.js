import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import userIcon from "../../../../assets/images/950771.png";
import userIcon2 from "../../../../assets/images/avatar+circle+male+profile+user+icon-1320196710301016992.png";
import { useState } from 'react';


const HistoryView = (props) => {
  const {date, senderId, receiverId, amount, EstimatedGasFee, GasLimit, MaxPriorityFee, MaxFee} = props.transactionHistorys;

  const amountValue = parseFloat(amount);
  const gasFee = parseFloat(EstimatedGasFee);
  
  return (
    <>
      <div>
        <h6>Status <span style={{float: "right", fontSize: '14px', color: '#037dd6', cursor: 'pointer', fontWeight: '400'}}>View on block explorer</span></h6>
      </div>
      <div className='mb-4'>
        <p style={{color: 'rgb(18, 185, 18)', fontWeight: '500'}}>Confirmed <span style={{float: "right", fontSize: '14px', color: '#037dd6', cursor: 'pointer', fontWeight: '400'}}>Copy Transaction ID</span></p>
      </div>

      <div className='d-flex' style={{color: 'rgb(80, 80, 80)', fontWeight: '600'}}>
        <h6>From</h6>
        <h6 style={{float:'right', marginLeft: 'auto'}}>To</h6>
      </div>

      <div className='d-flex'>
        <div style={{width: "130px", display: 'flex'}}>
          <img style={{width: '20px', height: "20px", marginTop: '4px', marginRight: '10px'}} src={userIcon} alt=''/>
          <p> {senderId.toString().substring(0, 5)}.......{senderId.toString().substring(38)}</p>
        </div>

        <div style={{marginLeft: '30px'}}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        <div style={{width: "130px", display: 'flex', marginLeft: '30px'}}>
          <img style={{width: '20px', height: "20px", marginTop: '4px', marginRight: '10px'}} src={userIcon} alt=''/>
          <p> {receiverId.toString().substring(0, 5)}.......{receiverId.toString().substring(38)}</p>
        </div>
      </div>

      <div className='transactionDetail' style={{fontFamily: "Poppins", fontSize: '14px', borderBottom: '1px solid gainsboro'}}>
        <h6 style={{borderBottom: "1px solid gainsboro", marginTop: '20px', paddingBottom: '10px'}}>Transaction</h6>
        <p>Amount <span className='amount' style={{float: "right"}}>{amount} ETH</span></p>
        <p>Gas Fee <span className='gasFee' style={{float: "right"}}>{EstimatedGasFee}</span></p>
        <p>Gas Limit <span style={{float: "right"}}>{GasLimit}</span></p>
        {/* <p>Max Priority Fee <span style={{float: "right"}}>{MaxPriorityFee}</span></p>
        <p>Max Fee <span style={{float: "right"}}>{MaxFee}</span></p> */}
      </div>
      <div>
        <p>Total <span style={{float: "right"}}>{amountValue + gasFee} ETH</span></p>
      </div>
      
    </>
  );
};

export default HistoryView;