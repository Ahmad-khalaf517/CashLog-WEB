import { Request, Response, NextFunction } from "express";
import Expense from "../models/expense.model";

export const createExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
};

export const getExpenses = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expenses = await Expense.find().populate('type_id', 'name').exec();
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};
