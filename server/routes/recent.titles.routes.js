import { Book } from "../models/Book.model.js";

export const recentTitles = async (req, res) => {
  try {
    const recentTitles = await Book.find();
    res.json(recentTitles);
    console.log(recentTitles);
  } catch (error) {
    console.log("There was an error", error);
  }
};
