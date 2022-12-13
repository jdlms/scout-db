import { Router } from "express";
const router = Router();

import reports from "./reports.js";
router.use(reports);

export default router;
