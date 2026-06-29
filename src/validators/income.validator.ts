import { z } from "zod";

export const createIncomeSchema = z.object({
    description: z.string().optional(),
    date: z.string().min(1, "Date is required"),
    amount: z.number().min(0, "Amount must be positive"),
    currency: z.string().min(1, "Currency is required"),
});