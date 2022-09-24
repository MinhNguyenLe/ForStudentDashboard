/*
  Warnings:

  - You are about to drop the `Salary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Salary" DROP CONSTRAINT "Salary_post_id_fkey";

-- DropTable
DROP TABLE "Salary";

-- CreateTable
CREATE TABLE "SalaryInformation" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SalaryInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SalaryInformation_content_key" ON "SalaryInformation"("content");

-- AddForeignKey
ALTER TABLE "SalaryInformation" ADD CONSTRAINT "SalaryInformation_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;
