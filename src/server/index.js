const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const getUsuarios = () => {
  let clients = io.sockets.clients().connected;
  let sockets = Object.values(clients);
  let users = sockets.map(socket => socket.user);

  return users;
};

const emitUsuarios = () => {
  io.emit("usuarios", getUsuarios());
};

let mensajes = [
  {
    cuerpo: "bienvenido al chat",
    usuario: "desde backend"
  }
];

io.on("connection", socket => {
  console.log("se ha conectado un usuario");

  socket.on("new_usuario", user => {
    socket.user = user;
    console.log("nuevo usuario: ", user);
    emitUsuarios();
  });

  socket.emit("messages", mensajes);

  // socket.on("agregar-msg", data => {
  //   mensajes.push(data);

  //   io.sockets.emit("messages", mensajes);
  // });

  socket.on("disconnect", () => {
    emitUsuarios();
    console.log("se ha desconectado el usuario");
  });
});

http.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
