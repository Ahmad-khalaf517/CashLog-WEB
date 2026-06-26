import { Router } from "express";
import { createExpense, getExpenses } from "../controllers/expense.controller";
import { validate } from "../middleware/validate.middleware";
import { createExpenseSchema } from "../validators/expense.validator";

const router = Router();

router.get("/", getExpenses);
router.post("/", validate(createExpenseSchema), createExpense);

export default router;