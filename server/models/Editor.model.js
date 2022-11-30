import { model, Schema } from "mongoose";

const editorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: false,
  },
  publisher: [{ type: Schema.Types.ObjectId, ref: "Publisher" }],
  authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const Editor = model("Editor", editorSchema);
