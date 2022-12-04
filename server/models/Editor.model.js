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
});

export const Editor = model("Editor", editorSchema);
