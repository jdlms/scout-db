import { Router } from "express";
import { Author } from "../../models/Author.model.js";
const router = Router();

router.get("/author-first-name", async (req, res) => {
  try {
    const authorFirstName = await Author.find({}).distinct("firstName");
    res.json(authorFirstName);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/author-last-name", async (req, res) => {
  try {
    const authorLastName = await Author.find({}).distinct("lastName");
    res.json(authorLastName);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
