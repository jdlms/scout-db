import { User } from "../models/User.model.js";

export const role = async (req, res) => {
  try {
    const role = req.body.role;
    if (role === "Scout") {
      await User.findOneAndUpdate({ email: req.body.email }, { role: "Scout" });
    } else if (role === "Client") {
      await User.findOneAndUpdate({ email: req.body.email }, { role: "Client" });
    }
    // const user = { username: savedUserInDb.username };
    // req.session.currentUser = user;

    return res.json({ message: "Scout role chosen", role });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful", error });
  }
};
