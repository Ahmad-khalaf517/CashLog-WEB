import { Schema, model, Document } from "mongoose";
import Expense from "../types/expense";

export interface IExpense extends Document, Expense {}

const expenseSchema = new Schema<IExpense>(
  {
    name: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    description: { type: String, trim: true },
    expenseType: {
      type: Schema.Types.ObjectId,
      ref: "ExpenseType",
      required: true,
    },
  },
  { timestamps: true },
);

export default model<IExpense>("Expense", expenseSchema);
