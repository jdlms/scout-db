import { model, Schema } from "mongoose";

const authorSchema = new Schema({
  _id: Schema.Types.ObjectId,
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: false,
  },
  // books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  agency: [{ type: Schema.Types.ObjectId, ref: "Agency" }],
},
{
  timestamps: true,
});

export const Author = model("Author", authorSchema);
