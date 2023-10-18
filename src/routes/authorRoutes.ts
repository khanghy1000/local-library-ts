import express from "express";

import * as authorController from "../controllers/authorController";

const router = express.Router();

router.get("/", authorController.findAll);
router.post("/", authorController.create);
router.get("/:id", authorController.findById);
router.put("/:id", authorController.update);
router.delete("/:id", authorController.deleteById);

export default router;