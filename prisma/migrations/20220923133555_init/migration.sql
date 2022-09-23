-- CreateEnum
CREATE TYPE "Star" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateTable
CREATE TABLE "Review" (
    "review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "star" "Star" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "CommentReview" (
    "comment_review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommentReview_pkey" PRIMARY KEY ("comment_review_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_user_id_key" ON "Review"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "CommentReview_user_id_key" ON "CommentReview"("user_id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentReview" ADD CONSTRAINT "CommentReview_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
