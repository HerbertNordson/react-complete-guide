import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveInfoForm = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveNewExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveInfoForm={saveInfoForm} />
    </div>
  );
};

export default NewExpense;
