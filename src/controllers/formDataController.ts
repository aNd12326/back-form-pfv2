import e, { Request, Response, NextFunction } from 'express';
import FormModel, { FormData } from '../models/form';

// Create a Data Form
export const createFormData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, message } = req.body;
    const newFormData: FormData = new FormModel({
      name,
      email,
      message,
    });

    const savedData = await newFormData.save();
    res.status(201).json({
      message: 'Form data created successfully',
      data: savedData,
    });
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getAllFormData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const formData = await FormModel.find();
    // console.log(formData)
    res.status(200).json({
      message: 'Form data retrieved successfully',
      data: formData,
    });
  } catch (error) {
    next(error);
  }
};
