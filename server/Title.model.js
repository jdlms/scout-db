import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: {},
  submissionStatus: {
    type: String,
    enum: ["In development", "On submission", "In auction", "Sold", "International submission"],
    require: true,
  },
  confidential: {
    type: Boolean,
  },
  agency: {},
  publisher: {},
  editor: {},
  rightsSold: {
    type: String,
  },
  details: {
    type: String,
    require: True,
  },
  currentMaterial: {
    type: String,
    enum: ["None", "Sample pages", "Proposal", "Full ms", "Partial ms"],
  },
  internalNotes: {
    type: String,
  },
});

export const Book = model("Book", bookSchema);

const authorSchema = new Schema({
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: false,
  },
});

// First name
// Last name
// Submission status
// Agency
// Publisher
// Editor
// Rights sold
// Details
// Current material
// Internal notes
