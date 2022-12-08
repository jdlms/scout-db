import { Router } from "express";
const router = Router();

router.get("/refresh-user", async (req, res) => {
  try {
    console.log(req.session);
    if (!req.session.currentUser) {
      return res.json({ message: "No live user" });
    }
    return res.json({ user: req.session.currentUser });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: "There was an error" });
  }
});

export default router;
