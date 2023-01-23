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

reportSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("There was a duplicate key error"));
  } else {
    next();
  }
});

export const Report = model("Report", reportSchema);
