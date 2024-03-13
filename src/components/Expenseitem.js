import './Expenseitem.css';


function ExpenseItem() {

  const expenseDate = new Date(2021,  2 , 28)
  const expenseTitle = 'Car Insurence' 
  const expenseAmonut =2000
  const expenseLocation = 'chennai'
  return (
      <div className="expense-item">
        <div>{expenseDate.toISOString()} </div>
        <div className="expense-item__description">
          <h2 >{expenseTitle}</h2>
        </div>
        <div>{expenseLocation}</div>
        <div className="expense-item__price">{expenseAmonut}</div>
        
      </div>
      
  );
}

export default ExpenseItem;
