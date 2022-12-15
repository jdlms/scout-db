import { Router } from "express";
import { Book } from "../../models/Book.model.js";
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const title = await Book.findById({ _id: `${req.params.id}` });
    console.log(title);
    res.json(title);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
