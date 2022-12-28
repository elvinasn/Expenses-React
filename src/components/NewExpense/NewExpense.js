import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSave(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
