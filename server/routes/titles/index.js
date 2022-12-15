import { Router } from "express";
const router = Router();


import single from "./single.routes.js";
router.use(single);

import update from "./update.title.routes.js";
router.use(update);

export default router;
