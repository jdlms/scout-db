import { Router } from "express";
const router = Router();

import login from "./login.routes";
router.use(login);

import { logout } from "./logout.routes.js";
router.use(logout);

import { role } from "./role.routes.js";
router.use(role);

import { signup } from "./signup.routes.js";
router.use(signup);

export default router;
