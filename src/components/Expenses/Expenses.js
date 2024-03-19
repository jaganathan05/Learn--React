import Card from '../UI/Card';
import ExpenseItem from "./Expenseitem";
import ExpensesFilter from './ExpenseFilter';
import "./Expenses.css";
import React , {useState} from 'react';

const Expenses = (props) =>{
    const expenses = props.Expenses
    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses.map(expense=>(<ExpenseItem
      key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      ></ExpenseItem>))}
      
    </Card>
  );
}
export default Expenses;
