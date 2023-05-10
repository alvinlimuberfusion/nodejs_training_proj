const path = require("path");

// path separator
console.log(path.sep);

// path join method
const filePath = path.join("/content", "subfolder", "text.txt");
console.log("filePath: " + filePath);

// base name
const basePath = path.basename(filePath);
console.log("basePath: " + basePath);

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "text.txt"
);

console.log("absolutePath: " + absolutePath);