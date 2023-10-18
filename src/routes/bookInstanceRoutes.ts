import express from "express";

import * as bookInstanceController from "../controllers/bookInstanceController";

const router = express.Router();

router.get("/", bookInstanceController.findAll);
router.post("/", bookInstanceController.create);
router.get("/:id", bookInstanceController.findById);
router.put("/:id", bookInstanceController.update);
router.delete("/:id", bookInstanceController.deleteById);

export default router;