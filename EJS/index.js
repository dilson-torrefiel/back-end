import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ejs from "ejs";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Check if it's Saturday or Sunday
  res.render("solution.ejs", {
    dayType: isWeekend ? "Weekend" : "Weekday",
    advice: isWeekend ? "Enjoy your weekend!" : "Work hard & smart!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
