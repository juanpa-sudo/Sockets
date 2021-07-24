const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const port = 3000;
const socket = require("socket.io");

module.exports.io = socket(server);

app.use(express.static(path.resolve(__dirname, "../public")));
require("./sockets");
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
