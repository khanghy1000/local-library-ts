import { PrismaClient } from "@prisma/client";
import { Book, NoIDBook } from "../schemas/Book";

const prisma = new PrismaClient();

export const findAll = async (): Promise<Book[]> => {
    return prisma.book.findMany();
};

export const findById = async (bookId: string): Promise<Book | null> => {
    return prisma.book.findFirst({
        where: {
            id: bookId,
        },
        include: {
            author: true,
            genre: true,
            bookInstance: true,
        },
    });
};

export const create = async (book: NoIDBook): Promise<Book> => {
    return prisma.book.create({
        data: {
            title: book.title,
            summary: book.summary,
            ISBN: book.ISBN,
            authorId: book.authorId,
            genre: {
                connect: book.genre,
            },
        },
        include: {
            author: true,
            genre: true,
            bookInstance: true,
        },
    });
};

export const update = async (book: Book): Promise<Book> => {
    return prisma.book.update({
        where: {
            id: book.id,
        },
        data: {
            title: book.title,
            summary: book.summary,
            ISBN: book.ISBN,
            authorId: book.authorId,
            genre: {
                set: book.genre,
            },
        },
        include: {
            author: true,
            genre: true,
            bookInstance: true,
        },
    });
};

export const deleteById = async (bookId: string): Promise<void> => {
    await prisma.book.delete({
        where: {
            id: bookId,
        },
    });
};
