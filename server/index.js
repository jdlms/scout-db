import express from "express";
import cors from "cors";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { connectToMongoose } from "./db.js";

import router from "./router.js";

await connectToMongoose();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: CLIENT_ORIGIN }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const publicFolderLocation = path.join(__dirname, "public");
app.use(express.static(publicFolderLocation));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
