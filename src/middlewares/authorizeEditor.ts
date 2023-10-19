import { RequestHandler } from "express";

const authorizeEditor: RequestHandler = (req, res, next) => {
    if (!req.decoded) {
        res.sendStatus(403);
    } else {
        if (req.decoded.role === "Editor" || req.decoded.role === "Admin") {
            next();
        } else {
            res.sendStatus(403);
        }
    }
};
export default authorizeEditor;
