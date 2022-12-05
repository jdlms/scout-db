import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    //   username: { type: String, unique: true, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    role: { type: String, enum: ["Scout", "Client"], require: true },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
