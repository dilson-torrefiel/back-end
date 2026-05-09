import { write, writeFile, readFile } from "fs";

const fileName = "output.txt";
const content = "This is a sample file created using Node.js.";

// writeFile(fileName, content, (error) => {
//   if (error) {
//     console.error("Error writing to file:", error);
//   } else {
//     console.log(`File '${fileName}' has been created successfully.`);
//   }
// });

readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
  } else {
    console.log(`Content of '${fileName}':\n${data}`);
  }
});
