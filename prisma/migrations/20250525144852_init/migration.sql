-- CreateEnum
CREATE TYPE "Role" AS ENUM ('FREE', 'PREMIUM', 'ADMIN');

-- CreateEnum
CREATE TYPE "CtfCategory" AS ENUM ('WEB', 'REV', 'PWN', 'CRYPTO', 'MISC', 'OSINT', 'LINUX');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "github_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "role" "Role" NOT NULL DEFAULT 'FREE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolvedLeetcode" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "problem_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "tags" TEXT[],
    "solution" TEXT,
    "ai_analysis" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SolvedLeetcode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SolvedCodeforces" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "problem_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "tags" TEXT[],
    "solution" TEXT,
    "language" TEXT,
    "ai_analysis" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SolvedCodeforces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CtfWriteup" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "challenge" TEXT NOT NULL,
    "category" "CtfCategory" NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CtfWriteup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_github_id_key" ON "User"("github_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "SolvedLeetcode_userId_idx" ON "SolvedLeetcode"("userId");

-- CreateIndex
CREATE INDEX "SolvedLeetcode_created_at_idx" ON "SolvedLeetcode"("created_at");

-- CreateIndex
CREATE INDEX "SolvedCodeforces_userId_idx" ON "SolvedCodeforces"("userId");

-- CreateIndex
CREATE INDEX "SolvedCodeforces_created_at_idx" ON "SolvedCodeforces"("created_at");

-- CreateIndex
CREATE INDEX "CtfWriteup_userId_idx" ON "CtfWriteup"("userId");

-- CreateIndex
CREATE INDEX "CtfWriteup_created_at_idx" ON "CtfWriteup"("created_at");

-- AddForeignKey
ALTER TABLE "SolvedLeetcode" ADD CONSTRAINT "SolvedLeetcode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolvedCodeforces" ADD CONSTRAINT "SolvedCodeforces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CtfWriteup" ADD CONSTRAINT "CtfWriteup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
