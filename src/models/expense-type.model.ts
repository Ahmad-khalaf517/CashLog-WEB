import { Schema, model, Document } from "mongoose";
import ExpenseType from "../types/expense-type";

export interface IExpenseType extends Document, ExpenseType {}

const expenseTypeSchema = new Schema<IExpenseType>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
    },
    { timestamps: true }
);

export default model<IExpenseType>("ExpenseType", expenseTypeSchema);