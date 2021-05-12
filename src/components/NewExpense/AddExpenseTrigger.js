const AddExpenseTrigger = (props) => {
    const addExpenseHandler = (event) => {
        props.onAddExpense();
    }
  return (
    <div className="new-expense__trigger">
      <button type="button" onClick={addExpenseHandler}>
        Add Expense
      </button>
    </div>
  );
};

export default AddExpenseTrigger;
