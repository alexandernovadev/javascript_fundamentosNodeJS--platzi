const fs = require("fs");

const server = require("http").createServer();

// Esto me ocupa toda la memoria de mi PC
server.on("request", (req, res) => {
  fs.readFile("./big", (err, data) => {
    if (err) {
      console.log("error", err);
    }

    res.end(data);
  });
});

server.listen(3000);