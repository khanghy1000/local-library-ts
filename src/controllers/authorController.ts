import asyncHandler from "express-async-handler";
import * as authorService from "../services/authorService";
import { noIDAuthorSchema } from "../schemas/Author";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export const findAll = asyncHandler(async (req, res) => {
    const authors = await authorService.findAll();
    res.json(authors);
});

export const create = asyncHandler(async (req, res) => {
    const { firstName, familyName, dateOfBirth, dateOfDeath } = req.body;
    try {
        const newAuthor = await authorService.create(
            noIDAuthorSchema.parse({
                firstName,
                familyName,
                dateOfBirth: new Date(dateOfBirth),
                dateOfDeath,
            }),
        );
        res.json(newAuthor);
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(401).json({
                status: res.statusCode,
                error: String(fromZodError(err)).split("; "),
            });
            return;
        }

        if (err instanceof Error) {
            res.status(404).json({
                status: res.statusCode,
                error: err.message,
            });
        }
    }
});
