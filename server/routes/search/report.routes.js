import { Router } from "express";
import { Report } from "../../models/Report.model.js";
const router = Router();

router.get("/unreleased-reports", async (req, res) => {
  try {
    const unreleasedReports = await Report.find({ released: false }).distinct("title");
    res.json(unreleasedReports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
