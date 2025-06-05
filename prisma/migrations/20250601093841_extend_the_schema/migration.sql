/*
  Warnings:

  - The values [PREMIUM] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `language` to the `SolvedLeetcode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('FREE', 'PREMIUM1', 'PREMIUM2', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'FREE';
COMMIT;

-- AlterTable
ALTER TABLE "SolvedLeetcode" ADD COLUMN     "language" TEXT NOT NULL;
