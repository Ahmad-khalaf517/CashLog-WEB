import { Router } from "express";
import Expense from "../types/expense";

const router = Router();

router.get("/", (req, res) => {
  const expenses : Expense[] = [
    { id: 1, name: "Expense 1", type: { id: 1, name: "Food", description: "Food expenses" }, date: "2023-01-01", amount: 10, currency: "USD" },
    { id: 2, name: "Expense 2", type: { id: 2, name: "Transport", description: "Transport expenses" }, date: "2023-01-02", amount: 20, currency: "USD" },
  ];
  res.json(expenses);
});

export default router;