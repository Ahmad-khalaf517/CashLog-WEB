import { Router } from "express";
import { createExpenseTypeSchema } from "../validators/expense-type.validator";
import {
  createExpenseType,
  deleteExpenseType,
  getExpenseTypeById,
  getExpenseTypes,
  updateExpenseType,
} from "../controllers/expense-type.controller";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.get("/", getExpenseTypes);

router.post("/", validate(createExpenseTypeSchema), createExpenseType);
router.get("/:id", getExpenseTypeById);
router.put("/:id", validate(createExpenseTypeSchema), updateExpenseType);
router.delete("/:id", deleteExpenseType);

export default router;
