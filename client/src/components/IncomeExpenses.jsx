import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // Get the amount array
  const amount = transactions.map((transaction) => transaction.amount);

  // Get the income
  const income = amount
    .filter((item) => item > 0)
    .reduce((tot, item) => (tot += item), 0)
    .toFixed(2);
  // Get the expense
  const expense = (
    amount.filter((item) => item < 0).reduce((tot, item) => (tot += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Rs. {Math.abs(income)} /-</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-Rs. {Math.abs(expense)} /-</p>
      </div>
    </div>
  );
};
