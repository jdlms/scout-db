import bcrypt from "bcryptjs";
import { User } from "../../models/User.model.js";

import { Router } from "express";
const router = Router();

//learn you a haskell for great good <-- book rec from Rico

router.post("/login", async (req, res) => {
  try {
    const userFromDb = await User.findOne(
      {
        email: req.body.email,
      },
      { email: 1, role: 1, password: 1 }
    );
    console.log(userFromDb);
    const doPasswordsMatch = await bcrypt.compare(req.body.password, userFromDb.password);
    //add error handling here, 400 response if pws do not match
    if (!doPasswordsMatch) {
      throw new Error("Passwords do not match");
    }
    const user = { email: userFromDb.email, role: userFromDb.role };
    req.session.currentUser = user;

    return res.json({ message: "Signup/Login sucessful", user });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful", error });
  }
});

export default router;
