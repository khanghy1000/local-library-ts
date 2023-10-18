import { PrismaClient } from "@prisma/client";
import { Author, NoIDAuthor } from "../schemas/Author";

const prisma = new PrismaClient();

export const findAll = async (): Promise<Author[]> => {
    return prisma.author.findMany();
};

export const findById = async (authorId: string): Promise<Author | null> => {
    return prisma.author.findFirst({
        where: {
            id: authorId,
        },
    });
};

export const create = async (author: NoIDAuthor): Promise<Author> => {
    return prisma.author.create({
        data: {
            firstName: author.firstName,
            familyName: author.familyName,
            dateOfBirth: author.dateOfBirth,
            dateOfDeath: author.dateOfDeath,
        },
    });
};

export const update = async (author: Author): Promise<Author> => {
    return prisma.author.update({
        where: {
            id: author.id,
        },
        data: {
            firstName: author.firstName,
            familyName: author.familyName,
            dateOfBirth: author.dateOfBirth,
            dateOfDeath: author.dateOfDeath,
        },
    });
};

export const deleteById = async (authorId: string): Promise<void> => {
    await prisma.author.delete({
        where: {
            id: authorId,
        },
    });
};
