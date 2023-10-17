import { PrismaClient } from "@prisma/client";
import { Genre, NoIDGenre } from "../schemas/Genre";

const prisma = new PrismaClient();

export const findAll = async (): Promise<Genre[]> => {
    const genres = await prisma.genre.findMany();
    return genres;
};

export const findById = async (genreId: string): Promise<Genre | null> => {
    const genre = await prisma.genre.findFirst({
        where: {
            id: genreId,
        },
    });
    return genre;
};

export const create = async (genre: NoIDGenre): Promise<Genre> => {
    const newGenre = await prisma.genre.create({
        data: {
            name: genre.name,
        },
    });
    return newGenre;
};

export const update = async (genre: Genre): Promise<Genre> => {
    const updatedGenre = await prisma.genre.update({
        where: {
            id: genre.id,
        },
        data: {
            name: genre.name ? genre.name : undefined,
        },
    });
    return updatedGenre;
};

export const deleteById = async (genreId: string): Promise<void> => {
    await prisma.genre.delete({
        where: {
            id: genreId,
        },
    });
};
