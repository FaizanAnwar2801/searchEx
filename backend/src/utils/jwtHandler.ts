import jwt, { SignOptions } from "jsonwebtoken"

type TPayload = {id: string};

export const generateToken = (payload: TPayload, expiresIn: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string): TPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as TPayload;
};