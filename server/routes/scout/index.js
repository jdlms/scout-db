import { Router } from "express";
const router = Router();

import reports from "./reports.routes.js";
router.use(reports);

import remove from "./removeTitle.routes.js";
router.use(remove);

export default router;
