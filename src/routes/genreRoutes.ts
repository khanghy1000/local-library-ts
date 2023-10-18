import express from "express";

import * as genreController from "../controllers/genreController";

const router = express.Router();

router.get("/", genreController.findAll);
router.post("/", genreController.create);
router.get("/:id", genreController.findById);
router.put("/:id", genreController.update);
router.delete("/:id", genreController.deleteById);

export default router;
