import { Router } from "express";
const router = Router();

export const refreshUser = async (req, res) => {
  try {
    console.log(req.session);
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful", error });
  }
};
