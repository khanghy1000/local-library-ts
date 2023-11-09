import asyncHandler from "express-async-handler";
import * as genreService from "../services/genreService";
import { noIDGenreSchema } from "../schemas/Genre";
import { z } from "zod";
import * as authorService from "../services/authorService";
import { AuthorSchema } from "../schemas/Author";

export const findById = asyncHandler(async (req, res) => {
    const genre = await genreService.findById(
        z.string().uuid().parse(req.params.id),
    );
    res.json(genre);
});

export const findAll = asyncHandler(async (req, res) => {
    const genres = await genreService.findAll();
    res.json(genres);
});

export const create = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const newGenre = await genreService.create(
        noIDGenreSchema.parse({
            name,
        }),
    );
    res.json(newGenre);
});

export const update = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;
    const updatedGenre = await authorService.update(
        AuthorSchema.parse({
            id,
            name,
        }),
    );
    res.json(updatedGenre);
});

export const deleteById = asyncHandler(async (req, res) => {
    await genreService.deleteById(z.string().uuid().parse(req.params.id));
    res.json({ message: "success" });
});
