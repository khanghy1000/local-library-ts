import asyncHandler from "express-async-handler";
import * as authorService from "../services/authorService";
import { AuthorSchema, NoIDAuthorSchema } from "../schemas/Author";
import { z } from "zod";

export const findById = asyncHandler(async (req, res) => {
    const author = await authorService.findById(
        z.string().uuid().parse(req.params.id),
    );
    res.json(author);
});

export const findAll = asyncHandler(async (req, res) => {
    const authors = await authorService.findAll();
    res.json(authors);
});

export const create = asyncHandler(async (req, res) => {
    const { firstName, familyName, dateOfBirth, dateOfDeath } = req.body;
    const newAuthor = await authorService.create(
        NoIDAuthorSchema.parse({
            firstName,
            familyName,
            dateOfBirth,
            dateOfDeath,
        }),
    );
    res.json(newAuthor);
});

export const update = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { firstName, familyName, dateOfBirth, dateOfDeath } = req.body;

    const updatedAuthor = await authorService.update(
        AuthorSchema.parse({
            id,
            firstName,
            familyName,
            dateOfBirth,
            dateOfDeath,
        }),
    );
    res.json(updatedAuthor);
});

export const deleteById = asyncHandler(async (req, res) => {
    await authorService.deleteById(z.string().uuid().parse(req.params.id));
});
