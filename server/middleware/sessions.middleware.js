export const userPresent = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.json({ message: "Unauthorised. Please login or signup." });
  }
};
