import React, { useContext, useState } from "react";
import { TransactionContext } from "../TransctionContext";

const ExpenseTracker = () => {
  const { transactions, dispatch } = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Add new transaction
  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
    setText("");
    setAmount("");
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  // Calculate totals
  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const balance = (income - Math.abs(expense)).toFixed(2);

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* Balance */}
      <h2>Your Balance: ${balance}</h2>

      {/* Summary */}
      <div>
        <div>
          <h3>Income</h3>
          <p>+${income}</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p>-${Math.abs(expense)}</p>
        </div>
      </div>

      {/* Transaction List */}
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.text}
            <span>
              ${transaction.amount < 0 ? "-" : "+"}
              {Math.abs(transaction.amount)}
            </span>
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Add New Transaction */}
      <form onSubmit={addTransaction}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount (negative = expense, positive = income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
