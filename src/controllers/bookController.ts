import asyncHandler from "express-async-handler";
import * as bookService from "../services/bookService";
import { BookSchema, NoIDBookSchema } from "../schemas/Book";
import { z } from "zod";

export const findById = asyncHandler(async (req, res) => {
    const book = await bookService.findById(
        z.string().uuid().parse(req.params.id),
    );
    res.json(book);
});

export const findAll = asyncHandler(async (req, res) => {
    const books = await bookService.findAll();
    res.json(books);
});

export const create = asyncHandler(async (req, res) => {
    const { title, summary, ISBN, authorId, genres } = req.body;

    const newBook = await bookService.create(
        NoIDBookSchema.parse({
            title,
            summary,
            ISBN,
            authorId,
            genres: genres
                ? genres.map((genre: string) => ({
                      id: genre,
                  }))
                : undefined,
        }),
    );
    res.json(newBook);
});

export const update = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { title, summary, ISBN, authorId, genres } = req.body;

    const updatedBook = await bookService.update(
        BookSchema.parse({
            id,
            title,
            summary,
            ISBN,
            authorId,
            genres: genres
                ? genres.map((genre: string) => ({
                      id: genre,
                  }))
                : undefined,
        }),
    );
    res.json(updatedBook);
});

export const deleteById = asyncHandler(async (req, res) => {
    await bookService.deleteById(z.string().uuid().parse(req.params.id));
    res.json({ message: "success" });
});
