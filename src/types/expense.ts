import ExpenseType from "./expense-type";

interface Expense {
  id: number;
  name: string;
  type: ExpenseType;
  date: string;
  amount: number;
  currency: string;
}

export default Expense;