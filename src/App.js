import ExpenseItem from "./components/Expenseitem";

function App() {
  const expenses = [
    { title: "rent", amount: 94, date: new Date(2024, 2, 12).toISOString() ,location:'delhi'},
    { title: "food", amount: 104, date: new Date(2024, 2, 12).toISOString() ,location:'chennai'},
    { title: "petrol", amount:200, date: new Date(2024, 2, 12).toISOString() ,location:'chennai'},
    { title: "movie", amount: 250, date: new Date(2024, 2, 12).toISOString() ,location:'mumbai'},
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].location}></ExpenseItem>
    </div>
  );
}

export default App;
