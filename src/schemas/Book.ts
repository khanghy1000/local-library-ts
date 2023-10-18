import { z } from "zod";

export const BookSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    summary: z.string(),
    ISBN: z.string(),
    authorId: z.string().uuid(),
    genres: z
        .array(
            z.object({
                id: z.string().uuid(),
            }),
        )
        .optional(),
});

export const NoIDBookSchema = BookSchema.omit({ id: true });

export type Book = z.infer<typeof BookSchema>;

export type NoIDBook = z.infer<typeof NoIDBookSchema>;
