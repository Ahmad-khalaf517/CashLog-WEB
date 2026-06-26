import { Schema, model, Document } from "mongoose";
import Expense from "../types/expense";

export interface IExpense extends Document, Expense {}

const expenseSchema = new Schema<IExpense>(
    {
        name: { type: String, required: true, trim: true },
        type_id: { type: String, required: true },
        date: { type: Date, required: true },
        amount: { type: Number, required: true },
        currency: { type: String, required: true },
        description: { type: String, trim: true },
    },
    { timestamps: true }
);

export default model<IExpense>("Expense", expenseSchema);