const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// read file with path directory
// default utf-8
const firstFile = readFileSync("./content/first.txt", "utf-8");
const secondFile = readFileSync("./content/second.txt", "utf-8");

console.log(firstFile, secondFile);

// create file if file path no exists, else will update that specific file
writeFileSync(
  "./content/result-sync.txt",
  `here is total file combined: ${firstFile}, ${secondFile}`
);

console.log("done with this task");
console.log("starting new one");
