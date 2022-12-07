import { Router } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User.model.js";

const router = Router();

export const login = async (req, res) => {
  try {
    const savedUserInDb = await User.findOne({
      email: req.body.email,
    });
    const doPasswordsMatch = await bcrypt.compare(req.body.password, savedUserInDb.password);
    //add error handling here, 400 response if pws do not match
    if (!doPasswordsMatch) {
      throw new Error("Passwords do not match");
    }
    const user = { email: savedUserInDb.email };
    req.session.currentUser = user;

    const userDetails = { email: savedUserInDb.email, role: savedUserInDb.role };
    console.log(userDetails);
    return res.json({ message: "Signup/Login sucessful", userDetails });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful", error });
  }
};
