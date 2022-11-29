import { Router } from "express";
import { Book } from "./models/Book.model";

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
    const newBook = await new Book({
      title: req.body.title,
      author: req.body.author,
    });
    await newTitle.save();
    return res.json({ message: "Title added!" });
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

export default router;
