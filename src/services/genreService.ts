import { PrismaClient } from "@prisma/client";
import { Genre, NoIDGenre } from "../schemas/Genre";

const prisma = new PrismaClient();

export const findAll = async (): Promise<Genre[]> => {
    return prisma.genre.findMany();
};

export const findById = async (genreId: string): Promise<Genre | null> => {
    return prisma.genre.findFirst({
        where: {
            id: genreId,
        },
    });
};

export const create = async (genre: NoIDGenre): Promise<Genre> => {
    return prisma.genre.create({
        data: {
            name: genre.name,
        },
    });
};

export const update = async (genre: Genre): Promise<Genre> => {
    return prisma.genre.update({
        where: {
            id: genre.id,
        },
        data: {
            name: genre.name,
        },
    });
};

export const deleteById = async (genreId: string): Promise<void> => {
    await prisma.genre.delete({
        where: {
            id: genreId,
        },
    });
};
