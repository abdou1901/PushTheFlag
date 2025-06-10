-- AlterTable
ALTER TABLE "User" ALTER COLUMN "codeforces_repo" SET DEFAULT 'codeforces',
ALTER COLUMN "ctf_repo" SET DEFAULT 'ctf_writeups',
ALTER COLUMN "leetcode_repo" SET DEFAULT 'leetcode';
