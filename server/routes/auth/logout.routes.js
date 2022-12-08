export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.json({ Message: "Logged out successfully" });
  });
};
