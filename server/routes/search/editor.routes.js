import { Router } from "express";
import { Editor } from "../../models/Editor.model.js";
const router = Router();

router.get("/editor-name", async (req, res) => {
  try {
    const editorName = await Editor.find({}).distinct("name");
    res.json(editorName);
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
