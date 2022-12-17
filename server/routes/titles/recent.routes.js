import { Router } from "express";
import { Book } from "../../models/Book.model.js";

const router = Router();

router.get("/recent", async (req, res) => {
  try {
    const recentTitles = await Book.find();
    res.json(recentTitles);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;

//#todo this search needs to be refinded and not simply get all books
