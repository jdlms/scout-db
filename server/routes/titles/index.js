import { Router } from "express";
const router = Router();

import single from "./single.routes.js";
router.use(single);

import add from "./add.routes.js";
router.use(add);

import edit from "./edit.routes.js";
router.use(edit);

import remove from "./delete.routes.js";
router.use(remove);

import recent from "./recent.routes.js";
router.use(recent);

import reported from "./reported.routes.js";
router.use(reported);

import reports from "./reports.routes.js";
router.use(reports);

export default router;
