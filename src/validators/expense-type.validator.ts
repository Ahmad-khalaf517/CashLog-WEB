import { z } from "zod";

export const createExpenseTypeSchema = z.object({
    name: z.string().min(2, "Name too short"),
    description: z.string().optional(),
});