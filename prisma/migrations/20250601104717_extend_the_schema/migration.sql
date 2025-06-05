/*
  Warnings:

  - The `ai_analysis` column on the `SolvedLeetcode` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "SolvedLeetcode" DROP COLUMN "ai_analysis",
ADD COLUMN     "ai_analysis" JSONB;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email";
