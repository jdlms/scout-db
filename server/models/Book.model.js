import { model, Schema } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const bookSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    title: {
      type: String,
      // require: true,
    },
    author: [{ type: Schema.Types.ObjectId, ref: "Author", autopopulate: true }],
    submissionStatus: {
      type: String,
      enum: ["In development", "On submission", "In auction", "Sold", "International submission"],
      // require: true,
    },
    confidential: {
      type: Boolean,
    },
    agency: [{ type: Schema.Types.ObjectId, ref: "Agency", autopopulate: true }],
    publisher: [{ type: Schema.Types.ObjectId, ref: "Publisher", autopopulate: true }],
    editor: [{ type: Schema.Types.ObjectId, ref: "Editor", autopopulate: true }],
    rightsSold: {
      type: String,
    },
    currentMaterial: {
      type: String,
      enum: ["None", "Sample pages", "Proposal", "Full ms", "Partial ms"],
    },
    details: {
      type: String,
      // require: true,
    },
    internalNotes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

bookSchema.plugin(mongooseAutoPopulate);

export const Book = model("Book", bookSchema);

//book model needs: times reported on, date added/updated (can replace), territories sold, publishers sold, rights contact, optional: film agent
