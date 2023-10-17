import express from "express";

import * as genreController from "../controllers/genreController";

const router = express.Router();

router.get("/", genreController.findAll);
router.post("/", genreController.create);

export default router;