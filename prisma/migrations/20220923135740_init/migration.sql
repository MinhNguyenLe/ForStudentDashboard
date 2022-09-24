/*
  Warnings:

  - You are about to drop the `PostAndHasgtag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostAndHasgtag" DROP CONSTRAINT "PostAndHasgtag_hashtag_id_fkey";

-- DropForeignKey
ALTER TABLE "PostAndHasgtag" DROP CONSTRAINT "PostAndHasgtag_post_id_fkey";

-- DropTable
DROP TABLE "PostAndHasgtag";

-- CreateTable
CREATE TABLE "PostAndHashtag" (
    "post_id" INTEGER NOT NULL,
    "hashtag_id" INTEGER NOT NULL,

    CONSTRAINT "PostAndHashtag_pkey" PRIMARY KEY ("post_id","hashtag_id")
);

-- AddForeignKey
ALTER TABLE "PostAndHashtag" ADD CONSTRAINT "PostAndHashtag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAndHashtag" ADD CONSTRAINT "PostAndHashtag_hashtag_id_fkey" FOREIGN KEY ("hashtag_id") REFERENCES "Hashtag"("hashtag_id") ON DELETE RESTRICT ON UPDATE CASCADE;
