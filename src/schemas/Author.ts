import { z } from "zod";

export const AuthorSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    familyName: z.string(),
    dateOfBirth: z.date().optional().nullable(),
    dateOfDeath: z.date().optional().nullable(),
});

export const noIDAuthorSchema = AuthorSchema.omit({ id: true });

export type Author = z.infer<typeof AuthorSchema>;

export type NoIDAuthor = z.infer<typeof noIDAuthorSchema>;
