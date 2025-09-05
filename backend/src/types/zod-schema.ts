import { z } from "zod";

// Enums
export const UserRoleEnum = z.enum(["ADMIN", "BASIC"]);

// User Schema
export const userSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  password: z.string(),
  role: UserRoleEnum.default("BASIC"),
  isActive: z.boolean().default(true),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// OTP Schema
export const otpSchema = z.object({
  id: z.string(),
  userId: z.string(),
  codeHash: z.string(),
  expiresAt: z.date(),
  used: z.boolean().default(false),
  createdAt: z.date().optional(),
});

// Vendor Schema
export const vendorSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  location: z.string().optional(),
  servicesType: z.string().optional(),
  vendorName: z.string(),
  accountNumber: z.string().optional(),
  accessUrl: z.url(),
  username: z.string().optional(),
  password: z.string().optional(),
  validated: z.boolean().default(false),
  validatedOn: z.date().optional(),
  validatedBy: z.string().optional(),
  lastPassword: z.string().optional(),
  vendorContact: z.string().optional(),
  changedOn: z.date().optional(),
});

// AdminCredential Schema
export const adminCredentialSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  serverName: z.string(),
  username: z.string(),
  password: z.string(),
  accountType: z.string(),
  domainOrWorkgroup: z.string(),
  validated: z.boolean().default(false),
  validatedOn: z.date().optional(),
  validatedBy: z.string().optional(),
  lastPassword: z.string().optional(),
  passwordChangedOn: z.date().optional(),
  comments: z.string().optional(),
  networkDeviceId: z.string().optional(),
});

// NetworkDevice Schema
export const networkDeviceSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  location: z.string().optional(),
  deviceType: z.string(),
  deviceName: z.string(),
  deviceModel: z.string().optional(),
  deviceSerial: z.string().optional(),
  macAddress: z.string().optional(),
  deviceLocation: z.string().optional(),
  currentFirmware: z.string().optional(),
  ipAddress: z.string().optional(),
  accessUrl: z.url(),
  username: z.string().optional(),
  password: z.string().optional(),
  credsValidate: z.boolean().default(false),
  validatedOn: z.date().optional(),
  validatedBy: z.string().optional(),
  comments: z.string().optional(),
  vendorId: z.string().uuid().optional(),
});

