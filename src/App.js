import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';
import React, { useState } from 'react';

const App = () => {
  const expenses1 = [
    { id:1, title: "rent", amount: 94, date: new Date(2024, 2, 12), location:'delhi' },
    { id:2, title: "food", amount: 104, date: new Date(2024, 2, 12), location:'chennai' },
    { id:3, title: "petrol", amount: 200, date: new Date(2024, 2, 12), location:'chennai' },
    { id:4, title: "movie", amount: 250, date: new Date(2024, 2, 12), location:'mumbai' },
  ];
  
  const [expenses, setExpenses] = useState(expenses1);

 
  const addExpenseHandler = (expense) => {
   
    const updatedExpenses = [...expenses, expense];
    
    setExpenses(updatedExpenses);
  };
  console.log(expenses)

  return (
    <div>
   
      <NewExpense onsave={addExpenseHandler} />
     
      <Expenses Expenses={expenses} />
    </div>
  );
}

export default App;
