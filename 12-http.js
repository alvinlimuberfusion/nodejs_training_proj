const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);

  if (req.url === "/") {
    res.write("welcome to our home page");
  }

  if (req.url === "/about") {
    res.write("Here is our about page");
  }
  res.end(`<h1>Oops!</h1><p>Page not found</p>`);
});

server.listen(5000);
