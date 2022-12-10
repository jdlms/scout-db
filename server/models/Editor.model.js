import { model, Schema } from "mongoose";

const editorSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      require: true,
    },
    publisher: [{ type: Schema.Types.ObjectId, ref: "Publisher" }],
  },
  {
    timestamps: true,
  }
);

export const Editor = model("Editor", editorSchema);
