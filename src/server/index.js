const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const getVisitors = () => {
  let clients = io.sockets.clients().connected;
  let sockets = Object.values(clients);
  let users = sockets.map(socket => socket.user);

  return users;
};

const emitVisitors = () => {
  io.emit("visitors", getVisitors());
};

io.on("connection", socket => {
  console.log("se ha conectado un usuario");

  socket.on("new_visitor", user => {
    socket.user = user;
    console.log("nuevo visitante: ", user);
    emitVisitors();
  });

  socket.on("disconnect", () => {
    console.log("se ha desconectado el usuario");
  });
});

http.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
