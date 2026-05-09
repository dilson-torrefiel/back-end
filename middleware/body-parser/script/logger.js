import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const logFilePath = path.join(__dirname, "access.log");

function logger(req, res, next) {
  const logEntry = `${req.method} ${req.url} ${res.statusCode} - ${new Date().toISOString()}\n`;
  console.log(
    `${req.method} ${req.url} ${res.statusCode} - ${new Date().toISOString()}`,
  );
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
  next();
}

export default logger;
