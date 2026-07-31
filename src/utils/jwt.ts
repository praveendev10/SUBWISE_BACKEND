import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../config/env";
export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, env.JWT_SECRET!, {
    expiresIn: env.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, env.JWT_REFRESH_SECRET!, {
    expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });
};
