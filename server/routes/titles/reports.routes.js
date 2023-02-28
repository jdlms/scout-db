import { Router } from "express";
import { Report } from "../../models/Report.model.js";

const router = Router();

router.post("/add-to-report/:id", async (req, res) => {
  console.log("hi");
  console.log(req.body);
  try {
    if (req.body.addToReport.length > 1) {
      const report = await Report.findOne({ title: req.body.addToReport });
      console.log(req.params);
      report.books.push(req.params.id);
      await report.save();
      res.json("Title added to report!");
    }
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
