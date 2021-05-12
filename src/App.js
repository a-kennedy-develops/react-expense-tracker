import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const EXPENSES_DATA = [
  {
    id: "e1",
    title: "Groceries",
    amount: 94.12,
    date: new Date(2021, 9, 14),
  },
  {
    id: "e2",
    title: "Car Payment",
    amount: 449.49,
    date: new Date(2021, 3, 1),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 100.0,
    date: new Date(2020, 4, 4),
  },
  {
    id: "e4",
    title: "Batteries",
    amount: 12.04,
    date: new Date(2019, 2, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  const addExpenseHandler = (expense) => {
    console.log("In Add Expense handler");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
