import asyncHandler from "express-async-handler";
import * as genreService from "../services/genreService";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { noIDGenreSchema } from "../schemas/Genre";

export const findAll = asyncHandler(async (req, res) => {
    const genres = await genreService.findAll();
    res.json(genres);
});

export const create = asyncHandler(async (req, res) => {
    const { name } = req.body;
    try {
        const newGenre = await genreService.create(
            noIDGenreSchema.parse({
                name,
            }),
        );
        res.json(newGenre);
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
