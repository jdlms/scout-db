import { Router } from "express";
import { Book } from "../../models/Book.model.js";
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
  } catch (error) {
    if (error.code === 11000) {
      console.log("Report title duplication error...");
      return res.status(401).json({ error: "A report with this title already exists." });
    } else {
      return res
        .status(400)
        .json({ error: "There was an error creating this report. Error: " + error.code });
    }
  }
});

router.post("/delete-report", async (req, res) => {
  try {
    console.log(req.body);
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
    const books = report.books;

    for (const book of books) {
      await Book.findOneAndUpdate({ _id: book.id }, { reported: true });
    }
   
    //#todo each book in report must have report name added to 'reports' array

    res.json("Report released");
    console.log("Report released");
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.post("/add-book-to-report", async (req, res) => {
  try {
    const report = await Report.findOneAndUpdate({ title: req.body.title }, { book: req.body._id });
    res.json("Book added to report");
    console.log("Book added to report");
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/reports", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/unreleased-reports-obj", async (req, res) => {
  try {
    const unreleasedReports = await Report.find({ released: false });
    // .distinct("title");
    res.json(unreleasedReports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/report-by-id/:id", async (req, res) => {
  try {
    const report = await Report.findById({ _id: `${req.params.id}` });
    res.json(report);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/released-reports", async (req, res) => {
  try {
    const releasedReports = await Report.find({ released: true });
    res.json(releasedReports);
    console.log(releasedReports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
