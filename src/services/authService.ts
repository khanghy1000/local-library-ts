import { User } from "../schemas/User";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByUsername = async (
    username: string,
): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            username: username,
        },
    });
};

export const createNewUser = async (user: User): Promise<User> => {
    return prisma.user.create({
        data: user,
    });
};