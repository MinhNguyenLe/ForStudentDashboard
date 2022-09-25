/*
  Warnings:

  - You are about to drop the column `user_id` on the `Notification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_user_id_fkey";

-- DropIndex
DROP INDEX "Notification_user_id_key";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "user_id";

-- CreateTable
CREATE TABLE "UsersAndNotifications" (
    "user_id" INTEGER NOT NULL,
    "notification_id" INTEGER NOT NULL,

    CONSTRAINT "UsersAndNotifications_pkey" PRIMARY KEY ("user_id","notification_id")
);

-- AddForeignKey
ALTER TABLE "UsersAndNotifications" ADD CONSTRAINT "UsersAndNotifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersAndNotifications" ADD CONSTRAINT "UsersAndNotifications_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "Notification"("notification_id") ON DELETE RESTRICT ON UPDATE CASCADE;
