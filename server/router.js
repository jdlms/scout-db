import { Router } from "express";
import { Book } from "./models/Book.model.js";

const router = Router();

// router.get("/author-search", async (req, res) => {
//   try {
//     const authors = await Title.find({}, { author: 1 });
//     res.json(authors);
//   } catch (error) {
//     console.log("There was an error", error);
//   }
// });

router.post("/post", async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      submissionStatus: req.body.submissionStatus,
      rightsSold: req.body.rightsSold,
      details: req.body.details,
      currentMaterial: req.body.currentMaterial,
      internalNotes: req.body.internalNotes,
    });
    await newBook.save();

    //Author, agency, pub, editor

    return res.json({ message: "Title added!" });
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

export default router;
