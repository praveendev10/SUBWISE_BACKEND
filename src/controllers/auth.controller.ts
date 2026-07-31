import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { registerUser, signInUser } from "../services/auth.service";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const newUser = await registerUser(req.body);
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
export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const resData = await signInUser(req.body);
    await session.commitTransaction();

    const accessToken = generateAccessToken(resData._id.toString());
    const refreshToken = generateRefreshToken(resData._id.toString());
    res
      .status(200)
      .json({
        success: true,
        message: "User signed in successfully",
        data: { user: resData, accessToken, refreshToken },
      });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    await session.endSession();
  }
};
