import { Router } from "express";
import { Report } from "../../models/Report.model.js";
const router = Router();

router.post("/remove-title/:id", async (req, res) => {
  try {
    const report = await Report.updateOne(
      { _id: req.body.report },
      { $pull: { books: req.params.id } }
    );
    res.json({ message: "Title sucessfully removed." });
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
