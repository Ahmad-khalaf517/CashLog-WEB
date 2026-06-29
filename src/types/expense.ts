import ExpenseType from "./expense-type";

interface Expense {
  id: number;
  name: string;
  expenseType: ExpenseType;
  date: Date;
  amount: number;
  currency: string;
  description?: string;
}

export default Expense;