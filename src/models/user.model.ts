import mongoose, { SchemaDefinitionProperty, model, Schema } from "mongoose";
import { IUser } from "../interfaces/auth.interface";

const nameSchema: SchemaDefinitionProperty<string> = {
  type: String,
  required: [true, "Name is required"],
  trim: true,
  minLength: [2, "Minimum 2 characters"],
  maxLength: [50, "Maximum 50 characters"],
};

const userSchema = new Schema<IUser>(
  {
    firstName: nameSchema,
    lastName: nameSchema,
    userName: {
      type: String,
      required: [true, "Username is missing"],
      trim: true,
      unique: true,
      minLength: [5, "Minimum 5 character"],
      maxLength: [15, "Maximum 15 character"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Minimum 8 character"],
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    profileImg: String,
    profileImgId: String,
    createdAt: Date,
    updatedAt: Date,
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const user = model("User", userSchema);
export default user;
