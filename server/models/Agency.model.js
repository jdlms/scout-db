import { model, Schema } from "mongoose";

const agencySchema = new Schema({
  name: String,
  authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const Agency = model("Agency", agencySchema);
