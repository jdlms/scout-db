import { Router } from "express";
import { Agency } from "../../models/Agency.model.js";
const router = Router();

router.get("/agency-name", async (req, res) => {
  try {
    const agencyName = await Agency.find({}).distinct("name");
    res.json(agencyName);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
