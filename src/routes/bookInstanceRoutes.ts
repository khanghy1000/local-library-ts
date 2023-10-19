import express from "express";

import * as bookInstanceController from "../controllers/bookInstanceController";
import verifyToken from "../middlewares/verifyToken";
import authorizeEditor from "../middlewares/authorizeEditor";
import authorizeAdmin from "../middlewares/authorizeAdmin";

const router = express.Router();

router.get("/", bookInstanceController.findAll);
router.post("/", verifyToken, authorizeEditor, bookInstanceController.create);
router.get("/:id", bookInstanceController.findById);
router.put("/:id", verifyToken, authorizeEditor, bookInstanceController.update);
router.delete(
    "/:id",
    verifyToken,
    authorizeAdmin,
    bookInstanceController.deleteById,
);

export default router;