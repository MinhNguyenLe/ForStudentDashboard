/*
  Warnings:

  - The values [COMMENT,COMMENT_REVIEW] on the enum `NotificationFrom` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `post_id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review_id` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "NotificationFrom_new" AS ENUM ('POST', 'REVIEW');
ALTER TABLE "Notification" ALTER COLUMN "from" TYPE "NotificationFrom_new" USING ("from"::text::"NotificationFrom_new");
ALTER TYPE "NotificationFrom" RENAME TO "NotificationFrom_old";
ALTER TYPE "NotificationFrom_new" RENAME TO "NotificationFrom";
DROP TYPE "NotificationFrom_old";
COMMIT;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "post_id" INTEGER NOT NULL,
ADD COLUMN     "review_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Posts"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Review"("review_id") ON DELETE RESTRICT ON UPDATE CASCADE;
