import { Router } from "express";
import { Report } from "../../models/Report.model.js";
const router = Router();

router.get("/released-reports", async (req, res) => {
  try {
    const releasedReports = await Report.find({ released: true }).distinct("title");
    res.json(releasedReports);
    console.log(releasedReports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/unreleased-reports", async (req, res) => {
  try {
    const unreleasedReports = await Report.find({ released: false }).distinct("title");
    res.json(unreleasedReports);
    console.log(unreleasedReports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
