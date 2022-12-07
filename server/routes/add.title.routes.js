

import { Agency } from "../models/Agency.model.js";
import { Author } from "../models/Author.model.js";
import { Book } from "../models/Book.model.js";
import { Editor } from "../models/Editor.model.js";
import { Publisher } from "../models/Publisher.model.js";


export const addTitle = async (req, res) => {
  try {
    const addAuthor = await Author.findOneAndUpdate(
      {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
      },
      {},
      { upsert: true, new: true }
    );

    const addPublisher = await Publisher.findOneAndUpdate(
      {
        name: req.body.publisher,
      },
      {},
      { upsert: true, new: true }
    );

    const addAgency = await Agency.findOneAndUpdate(
      {
        name: req.body.agency,
      },
      {},
      { upsert: true, new: true }
    );

    const addEditor = await Editor.findOneAndUpdate(
      {
        firstName: req.body.editorFirstName,
        lastName: req.body.editorLastName,
      },
      {},
      { upsert: true, new: true }
    );

    const confidentialValue = !!req.body.confidential;

    const addBook = await Book.findOneAndUpdate(
      {
        title: req.body.title,
        author: addAuthor._id,
        submissionStatus: req.body.submissionStatus,
        confidential: confidentialValue,
        agency: addAgency._id,
        editor: addEditor._id,
        publisher: addPublisher._id,
        rightsSold: req.body.rightsSold,
        currentMaterial: req.body.currentMaterial,
        details: req.body.details,
        internalNotes: req.body.internalNotes,
      },
      {},
      { upsert: true, new: true }
    );
    res.json({ message: "Title sucessfully added." });
    console.log("Title added!");
  } catch (error) {
    console.log("There was an error", error);
  }
};
