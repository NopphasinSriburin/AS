import React, { useState } from 'react';

const AddRecord = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income'); // or 'expense'
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle adding record (e.g., API call)
    console.log({ amount, date, type, note });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <textarea
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Add Record</button>
    </form>
  );
};

export default AddRecord;
