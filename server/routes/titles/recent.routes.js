import { Router } from "express";
import { Book } from "../../models/Book.model.js";

const router = Router();

// #todo this search needs to be refinded and not simply get all books
// we'll try paginating

const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: "en",
  },
  sort: { createdAt: -1 },
};

router.get("/paginate", async (req, res) => {
  try {
    const paginatedTitles = await Book.paginate({}, options);
    console.log(paginatedTitles);
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/recent", async (req, res) => {
  try {
    const recentTitles = await Book.find().sort({ createdAt: -1 });
    res.json(recentTitles);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
