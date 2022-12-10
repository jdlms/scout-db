import { Router } from "express";
const router = Router();

import title from "./title.routes.js";
router.use(title);

import authorName from "./name.routes.js";
router.use(authorName);

import agency from "./agency.routes.js";
router.use(agency);

import publisher from "./publisher.routes.js";
router.use(publisher);

import editor from "./editor.routes.js";
router.use(editor);
// import refreshUser from "./refreshUser.routes.js";
// router.use(refreshUser);

export default router;
