import { z } from "zod";

export const createExpenseSchema = z.object({
    name: z.string().min(2, "Name too short"),
    description: z.string().optional(),
    type_id: z.string().min(1, "Type ID is required"),
    date: z.string().min(1, "Date is required"),
    amount: z.number().min(0, "Amount must be positive"),
    currency: z.string().min(1, "Currency is required"),
});