import { Schema, model, Document } from "mongoose";
import Income from "../types/income";

export interface IIncome extends Document, Income {}

const incomeSchema = new Schema<IIncome>(
  {
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    description: { type: String, trim: true },
  },
  { timestamps: true },
);

export default model<IIncome>("Income", incomeSchema);
