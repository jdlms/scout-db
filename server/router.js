import { Router } from "express";
import bcrypt from "bcryptjs";
import { Book } from "./models/Book.model.js";
import { Author } from "./models/Author.model.js";
import { Agency } from "./models/Agency.model.js";
import mongoose from "mongoose";
import { Publisher } from "./models/Publisher.model.js";
import { Editor } from "./models/Editor.model.js";
import { User } from "./models/User.model.js";

const router = Router();

// router.get("/author-search", async (req, res) => {
//   try {
//     const authors = await Title.find({}, { author: 1 });
//     res.json(authors);
//   } catch (error) {
//     console.log("There was an error", error);
//   }
// });

router.post("/post", async (req, res) => {
  try {
    const addBook = new Book({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      submissionStatus: req.body.submissionStatus,
      rightsSold: req.body.rightsSold,
      details: req.body.details,
      currentMaterial: req.body.currentMaterial,
      internalNotes: req.body.internalNotes,
    });
    await addBook.save();

    const addAuthor = await Author.findOneAndUpdate(
      {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        books: addBook._id,
      },
      {},
      { upsert: true, new: true }
    );

    const addAgency = await Agency.findOneAndUpdate(
      {
        name: req.body.agency,
        authors: addAuthor._id,
        books: addBook._id,
      },
      {},
      { upsert: true, new: true }
    );

    const addPublisher = await Publisher.findOneAndUpdate(
      {
        name: req.body.publisher,
        authors: addAuthor._id,
        books: addBook._id,
      },
      {},
      { upsert: true, new: true }
    );

    const addEditor = await Editor.findOneAndUpdate(
      {
        // name: req.body.editor,
        authors: addAuthor._id,
        books: addBook._id,
        publisher: addPublisher._id,
      },
      {},
      { upsert: true, new: true }
    );

    await Book.findByIdAndUpdate(
      addBook._id,
      {
        author: addAuthor._id,
        agency: addAgency._id,
        editor: addEditor._id,
        publisher: addPublisher._id,
      },
      { new: true }
    );

    await Author.findByIdAndUpdate(
      addAuthor._id,
      {
        agency: addAgency._id,
      },
      { new: true }
    );

    // book: author, agency, editor, publisher
    // author: agency

    console.log("Title added!");
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

//auth routes

async function generatePwHash(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

router.get("/login", () => {});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body.email);
    const newUser = new User({
      email: req.body.email,
      password: await generatePwHash(req.body.password),
    });
    await newUser.save();
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/logout", () => {});

export default router;
