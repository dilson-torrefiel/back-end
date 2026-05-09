import express from "express";
import { hostname } from "os";
import path from "path";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(req.hostname);
});
app.get("/home", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1><p>Email: example@example.com</p>");
});
app.post("/submit", (req, res) => {
  res.sendStatus(200);
});
app.put("/add/submit", (req, res) => {
  res.sendStatus(200);
});
app.patch("/add/submit", (req, res) => {
  res.sendStatus(201);
});
app.delete("/add/submit", (req, res) => {
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
