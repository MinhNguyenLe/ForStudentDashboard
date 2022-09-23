/*
  Warnings:

  - You are about to drop the column `locationId` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `shiftId` on the `Posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_shiftId_fkey";

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "locationId",
DROP COLUMN "shiftId";

-- CreateTable
CREATE TABLE "_LocationsToPosts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PostsToShifts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LocationsToPosts_AB_unique" ON "_LocationsToPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationsToPosts_B_index" ON "_LocationsToPosts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostsToShifts_AB_unique" ON "_PostsToShifts"("A", "B");

-- CreateIndex
CREATE INDEX "_PostsToShifts_B_index" ON "_PostsToShifts"("B");

-- AddForeignKey
ALTER TABLE "_LocationsToPosts" ADD CONSTRAINT "_LocationsToPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationsToPosts" ADD CONSTRAINT "_LocationsToPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostsToShifts" ADD CONSTRAINT "_PostsToShifts_A_fkey" FOREIGN KEY ("A") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostsToShifts" ADD CONSTRAINT "_PostsToShifts_B_fkey" FOREIGN KEY ("B") REFERENCES "Shifts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
