import './Expenseitem.css';


function ExpenseItem(props) {
  console.log(props)
  return (
      <div className="expense-item">
        <div>{props.date} </div>
        <div className="expense-item__description">
          <h2 >{props.title}</h2>
        </div>
        <div>{props.location}</div>
        <div className="expense-item__price">{props.amount}</div>
        
      </div>
      
  );
}

export default ExpenseItem;
