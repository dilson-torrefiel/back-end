import { writeFile } from "fs";
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter the text to generate QR code:",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const filePath = "my-site.txt";
    const qrPath = "my-site.png";
    var qr_svg = qr.image(answers.text, { type: "png" });
    var svg_string = qr.imageSync(answers.text, { type: "png" });

    // Save QR code as an image file
    qr_svg.pipe(fs.createWriteStream(qrPath));
    // OR using writeFile

    // Write QR code to a file
    // writeFile(qrPath, svg_string, (error) => {
    //   if (error) {
    //     console.error("Error writing file:", error);
    //   } else {
    //     console.log(`QR code generated and saved as ${qrPath}`);
    //   }
    // });

    // Write user input to a file
    writeFile(filePath, answers.text, (error) => {
      if (error) {
        console.error("Error writing file:", error);
      } else {
        console.log(`Text saved as ${filePath}`);
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
