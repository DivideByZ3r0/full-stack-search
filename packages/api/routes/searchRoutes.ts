import express from "express";

import { searchAll } from "../controllers/searchController";

const router = express.Router();

router.post("/", searchAll);

export default router;
