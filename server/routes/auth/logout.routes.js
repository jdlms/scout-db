import { Router } from "express";
const router = Router();

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.json({ Message: "Logged out successfully" });
  });
});

export default router;
