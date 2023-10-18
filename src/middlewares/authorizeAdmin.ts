import { RequestHandler } from "express";

const authorizeAdmin: RequestHandler = (req, res, next) => {
    if (!req.decoded) {
        res.sendStatus(403);
    } else {
        if (req.decoded.role === "admin") {
            next();
        } else {
            res.sendStatus(403);
        }
    }
};
export default authorizeAdmin;
