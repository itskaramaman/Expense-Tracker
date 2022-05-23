import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;
  transactions.map(i => {
    balance =  balance+i.amount;
  })

  const sign = balance >= 0 ? '' : '-';

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{sign}${Math.abs(balance.toFixed(2))}</h1>
    </>
  )
}

export default Balance
