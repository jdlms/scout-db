import { Router } from "express";
import { Book } from "../../models/Book.model.js";

const router = Router();

// paginate titles
router.get("/all", async (req, res) => {
  let pageNum = Number(req.query.page) + 1;

  const options = {
    page: pageNum,
    limit: 10,
    collation: {
      locale: "en",
    },
    sort: { createdAt: -1 },
  };

  try {
    const paginatedTitles = await Book.paginate({}, options);
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
