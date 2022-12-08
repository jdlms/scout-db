import { model, Schema } from "mongoose";

const publisherSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      require: true,
    },
    // editors: [{ type: Schema.Types.ObjectId, ref: "Editor" }],
  },
  {
    timestamps: true,
  }
);

export const Publisher = model("Publisher", publisherSchema);
