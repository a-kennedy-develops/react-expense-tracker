import ExpenseList from "./components/Expenses/ExpenseList";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2021, 4, 14),
    },
    {
      id: "e2",
      title: "Car Payment",
      amount: 449.49,
      date: new Date(2021, 4, 1),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 100.0,
      date: new Date(2021, 4, 4),
    },
    {
      id: "e4",
      title: "Batteries",
      amount: 12.04,
      date: new Date(2021, 4, 17),
    },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
