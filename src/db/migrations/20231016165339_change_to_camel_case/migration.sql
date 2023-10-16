/*
  Warnings:

  - You are about to drop the column `date_of_birth` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_death` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `family_name` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `due_back` on the `BookInstance` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfDeath` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `familyName` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueBack` to the `BookInstance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "date_of_birth",
DROP
COLUMN "date_of_death",
DROP
COLUMN "family_name",
DROP
COLUMN "first_name",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateOfDeath" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "familyName" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BookInstance" DROP COLUMN "due_back",
ADD COLUMN     "dueBack" TIMESTAMP(3) NOT NULL;
