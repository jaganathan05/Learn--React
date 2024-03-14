import './Expenseitem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const  ExpenseItem = (props) => {

 const Delete=(id)=>{

    console.log(id,'deleted')

  }

  return (
      <Card className="expense-item" >
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={props.amount} title={props.title} location={props.location} />

        <button onClick={()=>Delete(props.id)} >Change Title</button>
        
      </Card>
      
  );
}

export default ExpenseItem;
