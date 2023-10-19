import { z } from "zod";

export const UserSchema = z.object({
    username: z.string().min(5),
    password: z.string().min(7),
    role: z.enum(["Editor", "Admin"]).default("Editor"),
});

export const NoPasswordUserSchema = UserSchema.omit({ password: true });

export type User = z.infer<typeof UserSchema>;

export type NoPasswordUser = z.infer<typeof NoPasswordUserSchema>;
