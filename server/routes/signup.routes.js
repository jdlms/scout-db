import { User } from "../models/User.model.js";
import bcrypt from "bcryptjs";

async function generatePwHash(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export const signup = async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: await generatePwHash(req.body.password),
    });
    await newUser.save();

    const user = { email: newUser.email, role: undefined };
    req.session.currentUser = user;
    // console.log(user);
    return res.json({ message: "Signup/Login sucessful", user });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful.", error });
  }
};
