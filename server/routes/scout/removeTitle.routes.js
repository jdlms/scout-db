import { Router } from "express";
import { Report } from "../../models/Report.model.js";
const router = Router();

router.post("/remove-title/:id", async (req, res) => {
  try {
    const report = await Report.updateOne(
      { title: req.body.title },
      { $pull: { books: req.params.id } }
    );
    res.json({ message: "Title sucessfully removed." });
    console.log(req.body.title);
    console.log(req.params.id);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
