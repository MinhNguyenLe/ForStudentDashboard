/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Locations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Shifts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `desc_job` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "desc_job" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Locations_name_key" ON "Locations"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Shifts_name_key" ON "Shifts"("name");
