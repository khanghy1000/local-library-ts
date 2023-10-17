import { z } from "zod";

export const GenreSchema = z.object({
    id: z.string(),
    name: z.string(),
});

export const noIDGenreSchema = GenreSchema.omit({ id: true });

export type Genre = z.infer<typeof GenreSchema>;

export type NoIDGenre = z.infer<typeof noIDGenreSchema>;
