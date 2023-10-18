import express from "express";
import authorRouter from "./authorRoutes";
import genreRouter from "./genreRoutes";
import bookRouter from "./bookRoutes";
import BookInstanceRouter from "./bookInstanceRoutes";

const router = express.Router();

router.use("/api/authors", authorRouter);
router.use("/api/genres", genreRouter);
router.use("/api/books", bookRouter);
router.use("/api/bookinstances", BookInstanceRouter);

export default router;
