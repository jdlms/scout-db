import { Router } from "express";
import { Publisher } from "../../models/Publisher.model.js";
const router = Router();

router.get("/publisher-name", async (req, res) => {
  try {
    const publisherName = await Publisher.find({}).distinct("name");
    res.json(publisherName);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
