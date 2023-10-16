import { PrismaClient } from "@prisma/client";
import { Author, NoIDAuthor } from "../schemas/Author";

const prisma = new PrismaClient();

export const findAll = async (): Promise<Author[]> => {
    const authors = await prisma.author.findMany();
    return authors;
};

export const findById = async (authorId: string): Promise<Author | null> => {
    const author = await prisma.author.findFirst({
        where: {
            id: authorId,
        },
    });
    return author;
};

export const create = async (author: NoIDAuthor): Promise<NoIDAuthor> => {
    const newAuthor = await prisma.author.create({
        data: {
            firstName: author.firstName,
            familyName: author.familyName,
            dateOfBirth: author.dateOfBirth ? author.dateOfBirth : undefined,
            dateOfDeath: author.dateOfDeath ? author.dateOfDeath : undefined,
        },
    });
    return newAuthor;
};

export const update = async (author: Author): Promise<Author> => {
    const updatedAuthor = await prisma.author.update({
        where: {
            id: author.id,
        },
        data: {
            firstName: author.firstName ? author.firstName : undefined,
            familyName: author.familyName ? author.familyName : undefined,
            dateOfBirth: author.dateOfBirth ? author.dateOfBirth : undefined,
            dateOfDeath: author.dateOfDeath ? author.dateOfDeath : undefined,
        },
    });
    return updatedAuthor;
};

export const deleteById = async (authorId: string): Promise<void> => {
    await prisma.author.delete({
        where: {
            id: authorId,
        },
    });
};
