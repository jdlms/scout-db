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

router.post("/create-new-title", async (req, res) => {
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
});

router.get("/recent-titles", async (req, res) => {
  try {
    const recentTitles = await Book.find();
    res.json(recentTitles);
    console.log(recentTitles);
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

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: await generatePwHash(req.body.password),
    });
    await newUser.save();

    const user = { email: newUser.email };
    req.session.currentUser = user;

    return res.json({ message: "Signup/Login sucessful", user });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful.", error });
  }
});

router.post("/role", async (req, res) => {
  try {
    const role = req.body.role;
    if (role === "Scout") {
      await User.findOneAndUpdate({ email: req.body.email }, { role: "Scout" });
    } else if (role === "Client") {
      await User.findOneAndUpdate({ email: req.body.email }, { role: "Client" });
    }
    // const user = { username: savedUserInDb.username };
    // req.session.currentUser = user;

    return res.json({ message: "Scout role chosen", role });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful", error });
  }
});

// router.post("/login", async (req, res) => {
//   try {
//     const savedUserInDb = await User.findOne({
//       email: req.body.email,
//     });
//     const doPasswordsMatch = await bcrypt.compare(req.body.password, savedUserInDb.password);
//     //add error handling here, 400 response if pws do not match
//     if (!doPasswordsMatch) {
//       throw new Error("Passwords do not match");
//     }
//     const user = { email: savedUserInDb.email };
//     req.session.currentUser = user;

//     const userDetails = { email: savedUserInDb.email, role: savedUserInDb.role };
//     console.log(userDetails);
//     return res.json({ message: "Signup/Login sucessful", userDetails });
//   } catch (error) {
//     return res.status(500).json({ message: "Signup/Login unsucessful", error });
//   }
// });

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.json({ Message: "Logged out successfully" });
  });
});

export default router;
