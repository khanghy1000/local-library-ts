import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { NoPasswordUserSchema } from "../schemas/User";

const verifyToken: RequestHandler = (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];

        jwt.verify(
            bearerToken,
            process.env.JWT_SECRET as string,
            (err, decoded) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    req.token = bearerToken;
                    req.decoded = NoPasswordUserSchema.parse(decoded);
                }
            },
        );
        next();
    } else {
        res.sendStatus(403);
    }
};

export default verifyToken;
