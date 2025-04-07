import { Request, Response, NextFunction } from "express";
import { FormData, formData } from "../models/form";

// Create a Data Form
export const createFormData = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, message } = req.body;
    const newFormData: FormData = {
      id: formData.length + 1,
      name,
      email,
      message,
    };
    formData.push(newFormData);
    res.status(201).json({
      message: "Form data created successfully",
      data: newFormData,
    });
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getAllFormData = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({
      message: "Form data retrieved successfully",
      data: formData,
    });
  } catch (error) {
    next(error);
  }
};
