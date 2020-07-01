import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // get the amount from the transactions
  const amount = transactions.map((transaction) => transaction.amount);
  // get the total of all the amounts
  const total = amount.reduce((tot, item) => (tot += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rs. {total} /-</h1>
    </div>
  );
};
