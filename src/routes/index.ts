import { Router } from "express";
import expensesRouter from "./expenses.routes";
import expenseTypeRouter from "./expense-type.routes";
import incomeRouter from "./income.routes";

const router = Router();

router.use("/expenses", expensesRouter);
router.use("/expense-types", expenseTypeRouter);
router.use("/incomes", incomeRouter);
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the CashLog API",
  });
});

export default router;