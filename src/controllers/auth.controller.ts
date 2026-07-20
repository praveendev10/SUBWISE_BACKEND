import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import user from "../models/user.model";
import { Request, Response, NextFunction } from "express";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      age,
      phone,
      country,
    } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await user.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      age,
      phone,
      country,
    });
    await session.commitTransaction();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    await session.endSession();
  }
};
