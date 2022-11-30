import { Router } from "express";
import { Book } from "./models/Book.model.js";
import { Author } from "./models/Author.model.js";
import { Agency } from "./models/Agency.model.js";

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
        _id: new mongoose.Types.ObjectId(),
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        books: addBook._id,
      },
      {},
      { upsert: true }
    );
    await addAuthor.save();

    await Agency.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(),
        name: req.body.agency,
        authors: addAuthor._id,
        books: addBook._id,
      },
      {},
      { upsert: true }
    );

    //Author, agency, pub, editor

    return res.json({ message: "Title added!" });
  } catch (error) {
    console.log("There was an error", error);
  }
});

router.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

export default router;
