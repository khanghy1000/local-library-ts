import { PrismaClient } from "@prisma/client";
import {
    fakeAuthor,
    fakeBook,
    fakeBookInstance,
    fakeGenre,
} from "./db/fakeData";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.bookInstance.deleteMany();
    await prisma.book.deleteMany();
    await prisma.genre.deleteMany();
    await prisma.author.deleteMany();

    const fakeAuthors = [];
    for (let i = 0; i < 5; i++) {
        fakeAuthors.push(fakeAuthor());
    }
    await prisma.author.createMany({
        data: [...fakeAuthors],
    });

    const fakeGenres = [];
    for (let i = 0; i < 5; i++) {
        fakeGenres.push(fakeGenre());
    }
    await prisma.genre.createMany({
        data: [...fakeGenres],
    });

    const authors = await prisma.author.findMany();

    let fakeBooks = [];
    for (let i = 0; i < 5; i++) {
        fakeBooks.push(fakeBook());
    }
    fakeBooks = fakeBooks.map((book) => ({
        ...book,
        authorId: authors[0].id,
    }));
    await prisma.book.createMany({
        data: [...fakeBooks],
    });

    fakeBooks = [];
    for (let i = 0; i < 5; i++) {
        fakeBooks.push(fakeBook());
    }
    fakeBooks = fakeBooks.map((book) => ({
        ...book,
        authorId: authors[1].id,
    }));
    await prisma.book.createMany({
        data: [...fakeBooks],
    });

    fakeBooks = [];
    for (let i = 0; i < 5; i++) {
        fakeBooks.push(fakeBook());
    }
    fakeBooks = fakeBooks.map((book) => ({
        ...book,
        authorId: authors[2].id,
    }));
    await prisma.book.createMany({
        data: [...fakeBooks],
    });

    const books = await prisma.book.findMany();
    const genres = await prisma.genre.findMany();

    for (const book of books) {
        const index = books.indexOf(book);
        let a: number = 0,
            b: number = 1;
        if (0 <= index && index < 5) {
            a = 0;
            b = 1;
        }
        if (5 <= index && index < 10) {
            a = 1;
            b = 2;
        }
        if (10 <= index && index < 15) {
            a = 0;
            b = 2;
        }
        await prisma.book.update({
            where: {
                id: book.id,
            },
            data: {
                genres: {
                    connect: [
                        {
                            id: genres[a].id,
                        },
                        {
                            id: genres[b].id,
                        },
                    ],
                },
            },
        });
    }

    let fakeBookInstances = [];
    for (let i = 0; i < 5; i++) {
        fakeBookInstances.push(fakeBookInstance());
    }
    fakeBookInstances = fakeBookInstances.map((bookInstance) => ({
        ...bookInstance,
        bookId: books[0].id,
    }));
    await prisma.bookInstance.createMany({
        data: [...fakeBookInstances],
    });

    fakeBookInstances = [];
    for (let i = 0; i < 5; i++) {
        fakeBookInstances.push(fakeBookInstance());
    }
    fakeBookInstances = fakeBookInstances.map((bookInstance) => ({
        ...bookInstance,
        bookId: books[1].id,
    }));
    await prisma.bookInstance.createMany({
        data: [...fakeBookInstances],
    });

    fakeBookInstances = [];
    for (let i = 0; i < 5; i++) {
        fakeBookInstances.push(fakeBookInstance());
    }
    fakeBookInstances = fakeBookInstances.map((bookInstance) => ({
        ...bookInstance,
        bookId: books[2].id,
    }));
    await prisma.bookInstance.createMany({
        data: [...fakeBookInstances],
    });
};

main()
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        prisma.$disconnect();
    });
