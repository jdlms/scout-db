import { Router } from "express";
import { Book } from "../../models/Book.model.js";

const router = Router();

router.get("/reported", async (req, res) => {
  try {
    const recentTitles = await Book.find({ reported: true });
    res.json(recentTitles);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
