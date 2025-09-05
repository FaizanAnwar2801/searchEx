-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'BASIC');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'BASIC',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Otp" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "location" TEXT,
    "servicesType" TEXT,
    "vendorName" TEXT NOT NULL,
    "accountNumber" TEXT,
    "accessUrl" TEXT,
    "username" TEXT,
    "password" TEXT,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "validatedOn" TIMESTAMP(3),
    "validatedBy" TEXT,
    "lastPassword" TEXT,
    "vendorContact" TEXT,
    "changedOn" TIMESTAMP(3),
    "comments2" TEXT,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminCredential" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "serverName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "domainOrWorkgroup" TEXT NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "validatedOn" TIMESTAMP(3),
    "validatedBy" TEXT,
    "lastPassword" TEXT,
    "passwordChangedOn" TIMESTAMP(3),
    "comments" TEXT,
    "networkDeviceId" TEXT,

    CONSTRAINT "AdminCredential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NetworkDevice" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "location" TEXT,
    "deviceType" TEXT NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceModel" TEXT,
    "deviceSerial" TEXT,
    "macAddress" TEXT,
    "deviceLocation" TEXT,
    "currentFirmware" TEXT,
    "ipAddress" TEXT,
    "accessUrl" TEXT,
    "username" TEXT,
    "password" TEXT,
    "credsValidate" BOOLEAN NOT NULL DEFAULT false,
    "validatedOn" TIMESTAMP(3),
    "validatedBy" TEXT,
    "comments" TEXT,
    "comments2" TEXT,
    "vendorId" TEXT,

    CONSTRAINT "NetworkDevice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminCredential" ADD CONSTRAINT "AdminCredential_networkDeviceId_fkey" FOREIGN KEY ("networkDeviceId") REFERENCES "NetworkDevice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NetworkDevice" ADD CONSTRAINT "NetworkDevice_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
