import express from "express";
import { Router } from "express";
import cors from "cors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { connectToMongoose } from "./db.js";
import session from "express-session";
import { MONGO_URI } from "./config.js";
import { userPresent } from "./middleware/sessions.middleware.js";

import pkg from "connect-mongodb-session";
const MongoStore = pkg(session);

const app = express();
const PORT = 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";
const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicFolderLocation = path.join(__dirname, "public");

await connectToMongoose();

const store = new MongoStore({ uri: MONGO_URI, collection: "sessions" });

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 600000,
    },
    store: store,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(publicFolderLocation));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});

import authRouter from "./routes/auth/index.js";
app.use(authRouter);

import searchRouter from "./routes/search/index.js";
app.use("/search", searchRouter);

import scoutRouter from "./routes/scout/index.js";
app.use("/scout", scoutRouter);

import titlesRouter from "./routes/titles/index.js";
app.use("/titles", titlesRouter);
