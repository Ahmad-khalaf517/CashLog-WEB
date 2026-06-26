import { Request, Response, NextFunction } from "express";
import ExpenseType from "../models/expense-type.model";

export const createExpenseType = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expenseType = await ExpenseType.create(req.body);
    res.status(201).json(expenseType);
  } catch (error) {
    next(error);
  }
};

export const getExpenseTypes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expenseTypes = await ExpenseType.find();
    res.json(expenseTypes);
  } catch (error) {
    next(error);
  }
};
