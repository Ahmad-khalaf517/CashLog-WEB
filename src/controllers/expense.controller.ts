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
    const expenses = await Expense.find().populate('expenseType', 'name').exec();
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

export const getExpenseById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expense = await Expense.findById(req.params.id).populate('expenseType', 'name').exec();
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json(expense);
  } catch (error) {
    next(error);
  }
};

export const updateExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('expenseType', 'name').exec();
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json(expense);
  } catch (error) {
    next(error);
  }
};

export const deleteExpense = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id).populate('expenseType', 'name').exec();
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    next(error);
  }
};
