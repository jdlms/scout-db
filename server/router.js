import { Router } from "express";
import { Title } from "./Title.model.js";
import axios from "axios";

const router = Router();

router.get("/author-search", async (req, res) => {
  try {
    const authors = await Title.find({}, { author: 1 });
    res.json(authors);
    console.log(authors);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.post("/post", async (req, res) => {
  try {
    const newTitle = new Title({
      title: req.body.title,
      author: req.body.author,
    });
    await newTitle.save();
    return res.json({ message: "Title added!" });
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

export default router;
