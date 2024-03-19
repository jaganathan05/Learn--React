import React , {useState} from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {
const [isedit, setIsedit]=useState(false); 
  const SaveExpensedatahandler =(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id: Math.random().toString()
      }
      console.log(expenseData)
      props.onsave(expenseData)
      setIsedit(false)
  }
  const startEdithandler = ()=>{
  setIsedit(true)
  }
  const stopEdithandler = ()=>{
    setIsedit(false)
  }
  return (
    <div className='new-expense'>
      {!isedit && <button onClick={startEdithandler} >Add New Expense</button>}
      {isedit && <ExpenseForm stopedit={stopEdithandler} onSaveExpenseData={SaveExpensedatahandler}/>}
    </div>
  );
};

export default NewExpense;