-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_review_id_fkey";

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "post_id" DROP NOT NULL,
ALTER COLUMN "review_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Posts"("post_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Review"("review_id") ON DELETE SET NULL ON UPDATE CASCADE;
