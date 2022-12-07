import express from "express";
import { Router } from "express";

import cors from "cors";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;
const CLIENT_ORIGIN = "http://localhost:3000";

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

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { connectToMongoose } from "./db.js";

// import router from "./router.js";
import session from "express-session";

await connectToMongoose();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const publicFolderLocation = path.join(__dirname, "public");
app.use(express.static(publicFolderLocation));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});

import { login } from "./routes/login.js";
app.post("/login", login);
