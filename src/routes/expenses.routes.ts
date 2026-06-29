import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpenseById,
  getExpenses,
  updateExpense,
} from "../controllers/expense.controller";
import { validate } from "../middleware/validate.middleware";
import { createExpenseSchema } from "../validators/expense.validator";

const router = Router();

router.get("/", getExpenses);
router.post("/", validate(createExpenseSchema), createExpense);
router.get("/:id", getExpenseById);
router.put("/:id", validate(createExpenseSchema), updateExpense);
router.delete("/:id", deleteExpense);

export default router;
