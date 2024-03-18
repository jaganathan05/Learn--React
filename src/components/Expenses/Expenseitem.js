import './Expenseitem.css';
import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
const  ExpenseItem = (props) => {
  const [Amount,setAmount] = useState(props.amount);
  const ChangeAmount=()=>{

    setAmount(100)
    console.log(Amount)
  }

  return (
      <Card className="expense-item" >
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={Amount} title={props.title} location={props.location} />

        <button onClick={()=>ChangeAmount()} >Change Amount</button>
        
      </Card>
      
  );
}

export default ExpenseItem;
