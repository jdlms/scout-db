import { model, Schema } from "mongoose";

const reportSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    title: {
      type: String,
      require: true,
      unique: true,
    },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    released: { type: Boolean, require: true },
  },
  {
    timestamps: true,
  }
);

export const Report = model("Report", reportSchema);
