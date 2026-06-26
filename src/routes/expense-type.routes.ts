import { Router } from "express";
import ExpenseType from "../types/expense-type";

const router = Router();

router.get("/", (req, res) => {
  const expenseTypes : ExpenseType[] = [
    { id: 1, name: "Food", description: "Food expenses" },
    { id: 2, name: "Transport", description: "Transport expenses" },
  ];
  res.json(expenseTypes);
});

export default router;