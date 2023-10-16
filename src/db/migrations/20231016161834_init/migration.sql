-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Available', 'Maintenance', 'Loaned', 'Reserved');

-- CreateTable
CREATE TABLE "Genre"
(
    "id"   TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url"  TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book"
(
    "id"       TEXT NOT NULL,
    "title"    TEXT NOT NULL,
    "summary"  TEXT NOT NULL,
    "ISBN"     TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookInstance"
(
    "id"       TEXT         NOT NULL,
    "imprint"  TEXT         NOT NULL,
    "status"   "Status"     NOT NULL,
    "due_back" TIMESTAMP(3) NOT NULL,
    "bookId"   TEXT         NOT NULL,

    CONSTRAINT "BookInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author"
(
    "id"            TEXT         NOT NULL,
    "first_name"    TEXT         NOT NULL,
    "family_name"   TEXT         NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "date_of_death" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToGenre"
(
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToGenre_AB_unique" ON "_BookToGenre" ("A", "B");

-- CreateIndex
CREATE INDEX "_BookToGenre_B_index" ON "_BookToGenre" ("B");

-- AddForeignKey
ALTER TABLE "Book"
    ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookInstance"
    ADD CONSTRAINT "BookInstance_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToGenre"
    ADD CONSTRAINT "_BookToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToGenre"
    ADD CONSTRAINT "_BookToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
