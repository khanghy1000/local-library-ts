import { z } from "zod";

export const BookInstanceSchema = z.object({
    id: z.string().uuid(),
    imprint: z.string(),
    status: z.enum(["Available", "Maintenance", "Loaned", "Reserved"]),
    dueBack: z.coerce.date(),
    bookId: z.string().uuid(),
});

export const noIDBookInstanceSchema = BookInstanceSchema.omit({ id: true });

export type BookInstance = z.infer<typeof BookInstanceSchema>;

export type NoIDBookInstance = z.infer<typeof noIDBookInstanceSchema>;
