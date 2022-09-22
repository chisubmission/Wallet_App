import React from 'react';
import { useState, useEffect } from 'react';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const Activity = () => {
  const [transactions, setTransactions] = useState([]);

    useEffect(()=> {
        fetch('https://protected-gorge-73198.herokuapp.com/transaction')
        .then(res => res.json())
        .then(data => setTransactions(data))
    }, [])

  return (
    <div>
      {
        !transactions.length ? <p>You have no transactions</p> : 
        transactions.map((transaction) => <TransactionHistory key={transaction.key} transaction={transaction}></TransactionHistory>)
      }
    </div>
  );
};

export default Activity;