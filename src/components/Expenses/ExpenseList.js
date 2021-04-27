import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.scss";

const ExpenseList = (props) => {
  const listedExpenses = [];

  props.expenses.forEach((expense) => {
    listedExpenses.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });

  return <Card className="expenses">{listedExpenses};</Card>;
}

export default ExpenseList;
