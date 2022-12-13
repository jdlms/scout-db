import { Router } from "express";
const router = Router();

import reports from "./reports.routes.js";
router.use(reports);

export default router;
