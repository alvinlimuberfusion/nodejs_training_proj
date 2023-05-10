const { readFile, writeFile } = require("fs");

console.log("start");
// asynchronus read file with path directory
// default utf-8
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.warn(err);
    return;
  }
  const firstFile = result;
  console.log(firstFile);
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.warn(err);
      return;
    }
    const secondFile = result;
    console.log(secondFile);

    writeFile(
      "./content/result-async.txt",
      `here is total file combined: ${firstFile}, ${secondFile}`,
      (err, result) => {
        if (err) {
          console.warn(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});

console.log("starting new one");