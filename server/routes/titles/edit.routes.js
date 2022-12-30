import { Agency } from "../../models/Agency.model.js";
import { Author } from "../../models/Author.model.js";
import { Book } from "../../models/Book.model.js";
import { Editor } from "../../models/Editor.model.js";
import { Publisher } from "../../models/Publisher.model.js";
import { Report } from "../../models/Report.model.js";
import { Router } from "express";
const router = Router();

router.post("/edit/:id", async (req, res) => {
  try {
    const title = await Book.findById({ _id: `${req.params.id}` });
    const updateAuthor = await Author.findOneAndUpdate(
      { _id: title.author._id },

      { lastName: req.body.authorLastName, firstName: req.body.authorFirstName },
      { upsert: true, new: true }
    );

    const updatePublisher = await Publisher.findOneAndUpdate(
      { _id: title.publisher._id },
      {
        name: req.body.publisher,
      },

      { upsert: true, new: true }
    );

    const updateAgency = await Agency.findOneAndUpdate(
      { _id: title.author._id },
      {
        name: req.body.agency,
      },

      { upsert: true, new: true }
    );

    const updateEditor = await Editor.findOneAndUpdate(
      { _id: title.author._id },
      {
        name: req.body.editor,
      },

      { upsert: true, new: true }
    );

    const confidentialValue = !!req.body.confidential;

    const updateBook = await Book.findOneAndUpdate(
      { _id: title.id },
      {
        title: req.body.title,
        // author: updateAuthor._id,
        status: req.body.status,
        confidential: confidentialValue,
        // agency: updateAgency._id,
        // editor: updateEditor._id,
        // publisher: updatePublisher._id,
        rightsSold: req.body.rightsSold,
        currentMaterial: req.body.currentMaterial,
        details: req.body.details,
        internalNotes: req.body.internalNotes,
      },
      { upsert: true, new: true }
    );

    if (req.body.addToReport.length > 1) {
      const report = await Report.findOne({ title: req.body.addToReport });
      report.books.push(title._id);
      await report.save(); 
    }

    res.json({ message: "Title sucessfully updated." });
    console.log("Title updated!");
  } catch (error) {
    console.log("There was an error", error);
  }
});

export default router;
