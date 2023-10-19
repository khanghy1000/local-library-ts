import express from "express";

import * as bookController from "../controllers/bookController";
import verifyToken from "../middlewares/verifyToken";
import authorizeEditor from "../middlewares/authorizeEditor";
import authorizeAdmin from "../middlewares/authorizeAdmin";

const router = express.Router();

router.get("/", bookController.findAll);
router.post("/", verifyToken, authorizeEditor, bookController.create);
router.get("/:id", bookController.findById);
router.put("/:id", verifyToken, authorizeEditor, bookController.update);
router.delete("/:id", verifyToken, authorizeAdmin, bookController.deleteById);

export default router;