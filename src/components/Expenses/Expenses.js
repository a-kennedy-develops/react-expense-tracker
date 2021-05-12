import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';
import "./Expenses.scss";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />

      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
