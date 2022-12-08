import { Router } from "express";
const router = Router();

import login from "./login.routes.js";
router.use(login);

import logout from "./logout.routes.js";
router.use(logout);

import role from "./role.routes.js";
router.use(role);

import signup from "./signup.routes.js";
router.use(signup);

import refreshUser from "./refreshUser.routes.js";
router.use(refreshUser);

export default router;
