import { User } from "../../models/User.model.js";

export const role = async (req, res) => {
  try {
    const role = req.body.role;

    const user = await User.findOneAndUpdate({ email: req.body.email }, { role: role });
    const userObjForSession = { email: user.email, role: req.body.role };
    //set in session cookie
    req.session.currentUser = userObjForSession;

    return res.json({ message: `${role} choosen.` });
  } catch (error) {
    return res.status(500).json({ message: "Signup/Login unsucessful", error });
  }
};
