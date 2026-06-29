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

export const getExpenseTypeById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expenseType = await ExpenseType.findById(req.params.id);
    if (!expenseType) {
      return res.status(404).json({ message: "Expense type not found" });
    }
    res.json(expenseType);
  } catch (error) {
    next(error);
  }
};


export const updateExpenseType = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expenseType = await ExpenseType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!expenseType) {
      return res.status(404).json({ message: "Expense type not found" });
    }
    res.json(expenseType);
  } catch (error) {
    next(error);
  }
};

export const deleteExpenseType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expenseType = await ExpenseType.findByIdAndDelete(req.params.id);
    if (!expenseType) {
      return res.status(404).json({ message: "Expense type not found" });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};