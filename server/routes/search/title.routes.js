import { Router } from "express";
import { Book } from "../../models/Book.model.js";
const router = Router();

router.get("/title", async (req, res) => {
  try {
    const authors = await Book.find({}).distinct("title");
    res.json(authors);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
