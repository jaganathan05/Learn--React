import Expenses from './components/Expenses/Expenses';
import React from 'react';

const App = () => {
  const expenses = [
    { title: "rent", amount: 94, date: new Date(2024, 2, 12) ,location:'delhi'},
    { title: "food", amount: 104, date: new Date(2024, 2, 12),location:'chennai'},
    { title: "petrol", amount:200, date: new Date(2024, 2, 12) ,location:'chennai'},
    { title: "movie", amount: 250, date: new Date(2024, 2, 12) ,location:'mumbai'},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
