import express from "express";
import authorRouter from "./authorRoutes";
import genreRouter from "./genreRoutes";
import bookRouter from "./bookRoutes";
import bookInstanceRouter from "./bookInstanceRoutes";
import authRouter from "./authRoutes";

const router = express.Router();

router.use("/api/authors", authorRouter);
router.use("/api/genres", genreRouter);
router.use("/api/books", bookRouter);
router.use("/api/bookinstances", bookInstanceRouter);
router.use("/api/auth/", authRouter);

export default router;
