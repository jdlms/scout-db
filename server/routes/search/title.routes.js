import { Router } from "express";
import { Book } from "../../models/Book.model.js";
const router = Router();

router.get("/title", async (req, res) => {
  try {
    const titles = await Book.find({}).distinct("title");
    // const titlesInArray = Object.values(titles);
    res.json(titles);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
