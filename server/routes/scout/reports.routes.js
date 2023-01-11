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
    console.log(newReport);
  } catch (error) {
    console.log("There was an error", error);
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
    //#todo for each book in report, 'reported' must be set to 'true'
    //get the books array and then loop through changing reported to true
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
    console.log(reports);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/unreleased-reports-obj", async (req, res) => {
  try {
    const unreleasedReports = await Report.find({ released: false });
    // .distinct("title");
    res.json(unreleasedReports);
    console.log(unreleasedReports);
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
