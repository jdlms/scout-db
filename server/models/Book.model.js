import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  author: [{ type: Schema.Types.ObjectId, ref: "Author" }],
  submissionStatus: {
    type: String,
    enum: ["In development", "On submission", "In auction", "Sold", "International submission"],
    require: true,
  },
  // confidential: {
  //   type: Boolean,
  // },
  agency: [{ type: Schema.Types.ObjectId, ref: "Agency" }],
  publisher: [{ type: Schema.Types.ObjectId, ref: "Publisher" }],
  editor: [{ type: Schema.Types.ObjectId, ref: "Editor" }],
  rightsSold: {
    type: String,
  },
  details: {
    type: String,
    require: true,
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
