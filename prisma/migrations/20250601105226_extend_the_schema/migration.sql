/*
  Warnings:

  - You are about to drop the column `ai_analysis` on the `SolvedLeetcode` table. All the data in the column will be lost.
  - You are about to drop the column `solution` on the `SolvedLeetcode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SolvedLeetcode" DROP COLUMN "ai_analysis",
DROP COLUMN "solution",
ADD COLUMN     "files" JSONB;
