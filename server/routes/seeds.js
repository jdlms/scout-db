import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import { Agency } from "../../models/Agency.model.js";
import { Author } from "../../models/Author.model.js";
import { Book } from "../../models/Book.model.js";
import { Editor } from "../../models/Editor.model.js";
import { Publisher } from "../../models/Publisher.model.js";
//
// faker seed data
//

const status = [
  "In development",
  "On submission",
  "In auction",
  "Sold",
  "Published",
  "International submission",
];

const bool = [true, false];
const confidentialValue = bool[Math.floor(Math.random() * bool.length)];

const material = ["None", "Sample pages", "Proposal", "Full ms.", "Partial ms."];

// router.post("/", (req, res) => {
//   for (var i = 0; i < 2; i++) {
//     var seedData = new fakerModel({
//       title: faker.music.songName(),
//       authorFirstName: faker.name.firstName(),
//       authorLastName: faker.name.lastName(),
//       status: status[Math.floor(Math.random() * status.length)],
//       confidential: bool[Math.floor(Math.random() * bool.length)],
//       agency: faker.company.name(),
//       publisher: faker.company.name(),
//       editor: `${faker.name.firstName()} ${faker.name.lastName()}`,
//       currentMaterial: material[Math.floor(Math.random() * material.length)],
//       details: faker.random.words(150),
//       internalNotes: faker.random.words(60),
//     });
//     seedData.save((err, data) => {
//       if (err) {
//         console.log("error occured", err);
//       }
//     });
//   }
//   res.redirect("/");
// });

const seeds = [
  new Author(
    {
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
    },
    {},
    { upsert: true, new: true }
  ),
  new Publisher(
    {
      name: faker.company.name(),
    },
    {},
    { upsert: true, new: true }
  ),
  new Agency(
    {
      name: faker.company.name(),
    },
    {},
    { upsert: true, new: true }
  ),

  new Editor(
    {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    },
    {},
    { upsert: true, new: true }
  ),
  new Book(
    {
      title: faker.music.songName(),
      author: addAuthor._id,
      status: status[Math.floor(Math.random() * status.length)],
      confidential: confidentialValue,
      agency: addAgency._id,
      editor: addEditor._id,
      publisher: addPublisher._id,
      rightsSold: "",
      currentMaterial: material[Math.floor(Math.random() * material.length)],
      details: faker.random.words(150),
      internalNotes: faker.random.words(60),
      reported: false,
    },
    {},
    { upsert: true, new: true }
  ),
];

export const seedData = async () => {
  try {
    seeds.save();
    console.log("seed data added!");
  } catch (error) {
    console.error(err);
  }
};

// const defaultValues = {
//   title: "",
//   authorFirstName: "",
//   authorLastName: "",
//   agency: "",
//   publisher: "",
//   editor: "",
//   details: "",
//   rightsSold: "",
//   currentMaterial: "",
//   internalNotes: "",
//   status: "",
//   confidential: false,
//   addToReport: "",
//   reported: false,
// };
