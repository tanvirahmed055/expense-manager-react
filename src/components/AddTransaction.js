import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add New transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="transaction item"> Transaction Item</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Item..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (<strong>Note:</strong>Enter Negative Sign Before Expense, Enter Positive Sign Before Income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}
