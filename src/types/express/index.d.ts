import { NoPasswordUser } from "../../schemas/User";

declare global {
    namespace Express {
        interface Request {
            token?: string;
            decoded?: NoPasswordUser;
        }
    }
}
