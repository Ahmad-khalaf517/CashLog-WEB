import { Request, Response, NextFunction } from "express";
import Income from "../models/income.model";

export const createIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const income =  await Income.create(req.body);
    res.status(201).json(income);
  } catch (error) {
    next(error);
  }
};

export const getIncomes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const incomes = await Income.find().exec();
    res.json(incomes);
  } catch (error) {
    next(error);
  }
};

export const getIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const income = await Income.findById(req.params.id).exec();
    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }
    res.json(income);
  } catch (error) {
    next(error);
  }
};

export const updateIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }
    res.json(income);
  } catch (error) {
    next(error);
  }
};

export const deleteIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const income = await Income.findByIdAndDelete(req.params.id).exec();
    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }
    res.json({ message: "Income deleted successfully" });
  } catch (error) {
    next(error);
  }
};
