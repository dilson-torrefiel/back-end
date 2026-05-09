import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Create a write stream (in append mode) for logging
var accessLogStream = fs.createWriteStream(__dirname + "/access.log", {
  flags: "a",
});
// Setup the logger to use the 'combined' format and write to the access log stream
app.use(morgan("tiny", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;
  res.send(`Street: ${street}, Pet: ${pet}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
