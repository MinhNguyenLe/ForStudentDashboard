/*
  Warnings:

  - You are about to drop the `_LocationsToPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostsToShifts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LocationsToPosts" DROP CONSTRAINT "_LocationsToPosts_A_fkey";

-- DropForeignKey
ALTER TABLE "_LocationsToPosts" DROP CONSTRAINT "_LocationsToPosts_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostsToShifts" DROP CONSTRAINT "_PostsToShifts_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostsToShifts" DROP CONSTRAINT "_PostsToShifts_B_fkey";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "locationid" INTEGER[];

-- DropTable
DROP TABLE "_LocationsToPosts";

-- DropTable
DROP TABLE "_PostsToShifts";

-- CreateTable
CREATE TABLE "PostsAndLocations" (
    "postId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "PostsAndLocations_pkey" PRIMARY KEY ("postId","locationId")
);

-- CreateTable
CREATE TABLE "PostsAndShifts" (
    "postId" INTEGER NOT NULL,
    "shiftId" INTEGER NOT NULL,

    CONSTRAINT "PostsAndShifts_pkey" PRIMARY KEY ("postId","shiftId")
);

-- AddForeignKey
ALTER TABLE "PostsAndLocations" ADD CONSTRAINT "PostsAndLocations_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostsAndLocations" ADD CONSTRAINT "PostsAndLocations_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostsAndShifts" ADD CONSTRAINT "PostsAndShifts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostsAndShifts" ADD CONSTRAINT "PostsAndShifts_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
