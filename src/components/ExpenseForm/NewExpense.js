import React from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => { 
  const SaveExpensedatahandler =(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id: Math.random().toString()
      }
      console.log(expenseData)
      props.onsave(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={SaveExpensedatahandler}/>
    </div>
  );
};

export default NewExpense;