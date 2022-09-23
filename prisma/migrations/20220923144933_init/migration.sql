/*
  Warnings:

  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Comment` table. All the data in the column will be lost.
  - The primary key for the `SalaryInformation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `SalaryInformation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "id",
ADD COLUMN     "comment_id" SERIAL NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id");

-- AlterTable
ALTER TABLE "SalaryInformation" DROP CONSTRAINT "SalaryInformation_pkey",
DROP COLUMN "id",
ADD COLUMN     "salary_information_id" SERIAL NOT NULL,
ADD CONSTRAINT "SalaryInformation_pkey" PRIMARY KEY ("salary_information_id");
