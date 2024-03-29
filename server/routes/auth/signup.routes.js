import { User } from "../../models/User.model.js";
import bcrypt from "bcryptjs";
import { Router } from "express";
const router = Router();

async function generatePwHash(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: await generatePwHash(req.body.password),
      role: req.body.role,
    });
    await newUser.save();

    const user = { email: newUser.email, role: newUser.role };
    req.session.currentUser = user;
    // console.log(user);
    return res.json({ message: "Signup/Login sucessful", user });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful.", error });
  }
});

export default router;
