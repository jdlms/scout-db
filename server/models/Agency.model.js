import { model, Schema } from "mongoose";

const agencySchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      require: true,
    },
    authors: [{ type: Schema.Types.ObjectId, ref: "Author" }],
  },
  {
    timestamps: true,
  }
);

export const Agency = model("Agency", agencySchema);
