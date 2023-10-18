import { z } from "zod";

export const BookSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    summary: z.string(),
    ISBN: z.string(),
    authorId: z.string().uuid(),
    genre: z
        .array(
            z.object({
                id: z.string(),
            }),
        )
        .optional(),
});

export const noIDBookSchema = BookSchema.omit({ id: true });

export type Book = z.infer<typeof BookSchema>;

export type NoIDBook = z.infer<typeof noIDBookSchema>;
