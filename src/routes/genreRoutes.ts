import express from "express";

import * as genreController from "../controllers/genreController";
import verifyToken from "../middlewares/verifyToken";
import authorizeEditor from "../middlewares/authorizeEditor";
import authorizeAdmin from "../middlewares/authorizeAdmin";

const router = express.Router();

router.get("/", genreController.findAll);
router.post("/", verifyToken, authorizeEditor, genreController.create);
router.get("/:id", genreController.findById);
router.put("/:id", verifyToken, authorizeEditor, genreController.update);
router.delete("/:id", verifyToken, authorizeAdmin, genreController.deleteById);

export default router;
