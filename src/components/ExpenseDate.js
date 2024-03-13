import './ExpenseDate.css'
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-us',{month:'long'})
    const year = props.date.getFullYear()
    const Day = props.date.toLocaleString('en-us',{day: '2-digit'})

    return (
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{Day}</div>
        </div>
    )
}
export default ExpenseDate;