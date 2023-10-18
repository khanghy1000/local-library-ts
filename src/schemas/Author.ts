import { z } from "zod";

export const AuthorSchema = z.object({
    id: z.string().uuid(),
    firstName: z.string(),
    familyName: z.string(),
    dateOfBirth: z.coerce.date().nullish(),
    dateOfDeath: z.coerce.date().nullish(),
});

export const NoIDAuthorSchema = AuthorSchema.omit({ id: true });

export type Author = z.infer<typeof AuthorSchema>;

export type NoIDAuthor = z.infer<typeof NoIDAuthorSchema>;
