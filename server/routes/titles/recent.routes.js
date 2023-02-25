import { Router } from "express";
import { Book } from "../../models/Book.model.js";

const router = Router();

// #todo this search needs to be refinded and not simply get all books
// we'll try paginating

router.get("/all", async (req, res) => {
  let pageNum = req.query.page <= 1 ? 1 : req.query.page;

  const options = {
    page: pageNum,
    limit: 10,
    collation: {
      locale: "en",
    },
    sort: { createdAt: -1 },
  };

  console.log(options.page);
  try {
    const paginatedTitles = await Book.paginate({}, options);
    console.log(paginatedTitles);
    res.json(paginatedTitles);
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
