import Card from "../UI/Card";
import "./Expense.css";
import Expenseitem from "./ExpenseItem";

const Expense = (props) => {
  return (
    <Card className="expenses">
      <Expenseitem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <Expenseitem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <Expenseitem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <Expenseitem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      />
    </Card>
  );
};

export default Expense;
