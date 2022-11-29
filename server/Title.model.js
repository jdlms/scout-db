import { model, Schema } from "mongoose";

const titleSchema = new Schema({
  title: {
    type: String,
    unique: true,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
});

export const Title = model("Title", titleSchema);
