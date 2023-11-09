import asyncHandler from "express-async-handler";
import * as bookInstanceService from "../services/bookInstanceService";
import {
    BookInstanceSchema,
    NoIDBookInstanceSchema,
} from "../schemas/BookInstance";
import { z } from "zod";

export const findById = asyncHandler(async (req, res) => {
    const bookInstance = await bookInstanceService.findById(
        z.string().uuid().parse(req.params.id),
    );
    res.json(bookInstance);
});

export const findAll = asyncHandler(async (req, res) => {
    const bookInstances = await bookInstanceService.findAll();
    res.json(bookInstances);
});

export const create = asyncHandler(async (req, res) => {
    const { imprint, status, dueBack, bookId } = req.body;

    const newBookInstance = await bookInstanceService.create(
        NoIDBookInstanceSchema.parse({
            imprint,
            status,
            dueBack,
            bookId,
        }),
    );
    res.json(newBookInstance);
});

export const update = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { imprint, status, dueBack, bookId } = req.body;

    const updatedBookInstance = await bookInstanceService.update(
        BookInstanceSchema.parse({
            id,
            imprint,
            status,
            dueBack,
            bookId,
        }),
    );
    res.json(updatedBookInstance);
});

export const deleteById = asyncHandler(async (req, res) => {
    await bookInstanceService.deleteById(
        z.string().uuid().parse(req.params.id),
    );
    res.json({ message: "success" });
});
