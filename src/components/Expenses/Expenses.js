import Card from '../UI/Card';
import ExpensesList from './ExpenseList';
import ExpensesFilter from './ExpenseFilter';
import "./Expenses.css";
import React , {useState} from 'react';

const Expenses = (props) =>{
    
    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear)
    
  };
  const expenses = props.Expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={expenses} />
      
    </Card>
  );
}
export default Expenses;
