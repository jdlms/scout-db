import { model, Schema } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const reportSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    books: [{ type: Schema.Types.ObjectId, ref: "Book", autopopulate: true }],
    released: { type: Boolean, require: true },
  },
  {
    timestamps: true,
  }
);

reportSchema.plugin(mongooseAutoPopulate);

export const Report = model("Report", reportSchema);
