import express from "express";

import * as authorController from "../controllers/authorController";

const router = express.Router();

router.get("/", authorController.findAll);
router.post("/", authorController.create);

export default router;