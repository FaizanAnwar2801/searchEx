/*
  Warnings:

  - You are about to drop the column `comments2` on the `NetworkDevice` table. All the data in the column will be lost.
  - You are about to drop the column `comments2` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NetworkDevice" DROP COLUMN "comments2";

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "comments2",
ADD COLUMN     "comments" TEXT;
