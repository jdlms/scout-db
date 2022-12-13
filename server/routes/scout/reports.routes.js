import { Router } from "express";
import { Report } from "../../models/Report.model.js";
const router = Router();

router.post("/create-report", async (req, res) => {
  try {
    const newReport = new Report({
      title: req.body.title,
      released: false,
    });
    await newReport.save();
    res.json("Report created");
    console.log(newReport);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.post("/delete-report", async (req, res) => {
  try {
    await Report.deleteOne({ title: req.body.title });
    res.json("Report deleted");
    console.log("Report deleted");
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.post("/release-report", async (req, res) => {
  try {
    const report = await Report.findOneAndUpdate({ title: req.body.title }, { released: true });
    res.json("Report released");
    console.log(report);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.post("/add-book-to-report", async (req, res) => {
  try {
    const report = await Report.findOneAndUpdate({ title: req.body.title }, { book: req.body._id });
    res.json("Book added to report");
    console.log(report);
  } catch (error) {
    console.log("There was an error", error);
  }
});

//#todo create remove book from report route

router.get("/reports", async (req, res) => {
  try {
    const releasedReports = await Report.find();
    res.json(releasedReports);
    console.log(releasedReports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

// router.get("/unreleased-reports", async (req, res) => {
//   try {
//     const unreleasedReports = await Report.find({ released: false });
//     res.json(unreleasedReports);
//     console.log(unreleasedReports);
//   } catch (error) {
//     console.log("There was an error", error);
//   }
// });

export default router;