export const userPresent = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/login");
    res.json({ message: "Unauthorised. Please login or signup." });
  }
};
