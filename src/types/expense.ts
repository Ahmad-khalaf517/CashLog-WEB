import ExpenseType from "./expense-type";

interface Expense {
  id: number;
  name: string;
  type: ExpenseType;
  type_id: string;
  date: Date;
  amount: number;
  currency: string;
  description?: string;
}

export default Expense;