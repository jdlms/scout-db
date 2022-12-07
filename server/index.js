import express from "express";
import { Router } from "express";
import cors from "cors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { connectToMongoose } from "./db.js";
import session from "express-session";
import { userPresent } from "./middleware/sessions.middleware.js";

const app = express();
const PORT = 5000;
const CLIENT_ORIGIN = "http://localhost:3000";
const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicFolderLocation = path.join(__dirname, "public");

await connectToMongoose();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 600000,
    },
  })
);
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(publicFolderLocation));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});

import { login } from "./routes/login.routes.js";
app.post("/login", login);

import { logout } from "./routes/logout.routes.js";
app.post("/logout", logout);

import { role } from "./routes/role.routes.js";
app.post("/choose-role", role);

import { signup } from "./routes/signup.routes.js";
app.post("/signup", signup);

import { addTitle } from "./routes/add.title.routes.js";
app.post("/add-title", addTitle);

import { recentTitles } from "./routes/recent.titles.routes.js";
app.get("/recent-titles", recentTitles);
