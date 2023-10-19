import express from "express";

import * as authorController from "../controllers/authorController";
import verifyToken from "../middlewares/verifyToken";
import authorizeEditor from "../middlewares/authorizeEditor";
import authorizeAdmin from "../middlewares/authorizeAdmin";

const router = express.Router();

router.get("/", authorController.findAll);
router.post("/", verifyToken, authorizeEditor, authorController.create);
router.get("/:id", verifyToken, authorizeEditor, authorController.findById);
router.put("/:id", verifyToken, authorizeEditor, authorController.update);
router.delete("/:id", verifyToken, authorizeAdmin, authorController.deleteById);

export default router;