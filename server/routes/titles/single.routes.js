import { Router } from "express";
import { Book } from "../../models/Book.model.js";
import { Report } from "../../models/Report.model.js";

const router = Router();

router.get("/single/:id", async (req, res) => {
  try {
    const title = await Book.findById({ _id: `${req.params.id}` });
    res.json(title);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
