const { io } = require("./server");

io.on("connection", (client) => {
  console.log("conectado");
  client.on("disconnect", () => {
    console.log("desconectado");
  });
});
