import { model, Schema } from "mongoose";

const publisherSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name:  String,
  // authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
  // books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const Publisher = model("Publisher", publisherSchema);
