/*
  Warnings:

  - You are about to drop the column `ai_analysis` on the `SolvedCodeforces` table. All the data in the column will be lost.
  - You are about to drop the column `problem_id` on the `SolvedCodeforces` table. All the data in the column will be lost.
  - Added the required column `contest_id` to the `SolvedCodeforces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `index` to the `SolvedCodeforces` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SolvedCodeforces" DROP COLUMN "ai_analysis",
DROP COLUMN "problem_id",
ADD COLUMN     "contest_id" INTEGER NOT NULL,
ADD COLUMN     "files" JSONB,
ADD COLUMN     "index" CHAR(1) NOT NULL;
