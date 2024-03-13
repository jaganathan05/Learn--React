import './Expenseitem.css'
function ExpenseDetails(props) {

  return (
    <div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div>{props.location}</div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}
export default ExpenseDetails;
