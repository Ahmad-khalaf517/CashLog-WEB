import { Router } from "express";
import {
  createIncome,
  deleteIncome,
  getIncomeById,
  getIncomes,
  updateIncome,
} from "../controllers/income.controller";
import { validate } from "../middleware/validate.middleware";
import { createIncomeSchema } from "../validators/income.validator";


const router = Router();

router.get("/", getIncomes);
router.post("/", validate(createIncomeSchema), createIncome);
router.get("/:id", getIncomeById);
router.put("/:id", validate(createIncomeSchema), updateIncome);
router.delete("/:id", deleteIncome);

export default router;