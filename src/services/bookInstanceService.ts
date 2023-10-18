import { PrismaClient } from "@prisma/client";
import { BookInstance, NoIDBookInstance } from "../schemas/BookInstance";

const prisma = new PrismaClient();

export const findAll = async (): Promise<BookInstance[]> => {
    return prisma.bookInstance.findMany();
};

export const findById = async (
    bookInstanceId: string,
): Promise<BookInstance | null> => {
    return prisma.bookInstance.findFirst({
        where: {
            id: bookInstanceId,
        },
        include: {
            book: true,
        },
    });
};

export const create = async (
    bookInstance: NoIDBookInstance,
): Promise<BookInstance> => {
    return prisma.bookInstance.create({
        data: {
            imprint: bookInstance.imprint,
            status: bookInstance.status,
            dueBack: bookInstance.dueBack,
            bookId: bookInstance.bookId,
        },
    });
};

export const update = async (
    bookInstance: BookInstance,
): Promise<BookInstance> => {
    return prisma.bookInstance.update({
        where: {
            id: bookInstance.id,
        },
        data: {
            imprint: bookInstance.imprint,
            status: bookInstance.status,
            dueBack: bookInstance.dueBack,
            bookId: bookInstance.bookId,
        },
    });
};

export const deleteById = async (bookInstanceId: string): Promise<void> => {
    await prisma.bookInstance.delete({
        where: {
            id: bookInstanceId,
        },
    });
};
