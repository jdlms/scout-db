import { model, Schema } from "mongoose";

const editorSchema = new Schema({
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: false,
  },
  authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const Editor = model("Editor", editorSchema);
