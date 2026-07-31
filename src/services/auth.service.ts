import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.model";
import { ILoginUser, IUser } from "../interfaces/auth.interface";

export const registerUser = async (userData: IUser) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    age,
    phone,
    country,
  } = userData;
  const existingUser = await user.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");  
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

  return newUser;
};
export const signInUser = async (loginData: ILoginUser) => {
  const { identifier, password } = loginData;
  const existingUser = await user.findOne({
    $or: [{ email: identifier }, { userName: identifier }],
  });
  if (!existingUser) {
    throw new Error("User not found");
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }
  return existingUser;
};
