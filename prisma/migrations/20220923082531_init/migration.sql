-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "address_working" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone_number" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "desc_job" SET DEFAULT '',
ALTER COLUMN "price" SET DEFAULT 100;
