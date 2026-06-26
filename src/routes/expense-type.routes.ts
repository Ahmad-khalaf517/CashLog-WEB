import { Router } from "express";
import { createExpenseTypeSchema } from "../validators/expense-type.validator";
import { createExpenseType, getExpenseTypes } from "../controllers/expense-type.controller";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.get("/", getExpenseTypes);

router.post("/", validate(createExpenseTypeSchema), createExpenseType);

export default router;
