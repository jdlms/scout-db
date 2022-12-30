import { Router } from "express";
import { Book } from "../../models/Book.model";
const router = Router();

router.post("/delete/:id", async (req, res) => {
  try {
    const titleToDelete = await Book.findOneAndDelete({ _id: `${req.params.id}` });
    res.json({ message: "Title sucessfully deleted." });
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
