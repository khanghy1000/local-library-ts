import express from "express";

import * as bookController from "../controllers/bookController";

const router = express.Router();

router.get("/", bookController.findAll);
router.post("/", bookController.create);
router.get("/:id", bookController.findById);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.deleteById);

export default router;