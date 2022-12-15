import { Router } from "express";
const router = Router();

// import login from "./login.routes.js";
// router.use(login);

import single from "./single.routes.js";
router.use(single);

export default router;
