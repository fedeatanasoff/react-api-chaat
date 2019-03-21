const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 5200;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const getUsuariosOnline = () => {
  let clients = io.sockets.clients().connected;
  let sockets = Object.values(clients);
  let users = sockets.map(socket => socket.user);

  return users.filter(user => user !== undefined);
};

io.on("connection", socket => {
  console.log("se ha conectado un usuario");

  const emitOnlineUsuarios = () => {
    socket.broadcast.emit("usuarios", getUsuariosOnline());
  };

  socket.on("add_usuario", usuario => {
    socket.emit("server_message", {
      message: " bienvenidos al chat"
    });

    socket.broadcast.emit("server_message", {
      message: `${usuario.name} se ha conectado al chat`
    });

    socket.user = usuario;
    emitOnlineUsuarios();
  });

  socket.on("disconnect", () => {
    const { user } = socket;

    if (user) {
      socket.broadcast.emit("server_message", {
        message: `${socket.name} se ha desconectado del chat`
      });
    }

    emitOnlineUsuarios();
  });
});

http.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
