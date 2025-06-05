/*
  Warnings:

  - Added the required column `github_username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "codeforces_repo" TEXT NOT NULL DEFAULT 'codeforces/',
ADD COLUMN     "ctf_repo" TEXT NOT NULL DEFAULT 'ctf_writeups/',
ADD COLUMN     "email" TEXT,
ADD COLUMN     "github_username" TEXT NOT NULL,
ADD COLUMN     "leetcode_repo" TEXT NOT NULL DEFAULT 'leetcode/';
