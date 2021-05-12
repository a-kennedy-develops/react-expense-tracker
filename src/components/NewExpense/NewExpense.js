import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };

  const onCancelAddingExpense = () => {
    setAddingExpense(false);
  };

  const onTriggerPressHandler = () => {
    setAddingExpense(true);
  };

  return (
    <div className="new-expense">
      {addingExpense === false ? (
        <div className="new-expense__trigger">
        <button type="button" onClick={onTriggerPressHandler}>
          Add Expense
        </button>
      </div>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancelExpense={onCancelAddingExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
