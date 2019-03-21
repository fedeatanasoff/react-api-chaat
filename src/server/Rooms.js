const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = 5100;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("se ha conectado un usuario");

  socket.on("join_room", room => {
    socket.join(room);
  });

  socket.on("message", data => {
    const { room, message } = data;

    socket.to(room).emit("message", {
      message,
      name: "hello friend"
    });

    socket.on("typing", data => {
      const { room } = data;
      socket.to(room).emit("typing", "alguien esta escribiendo");
    });

    socket.on("stop_typing", data => {
      const { room } = data;
      socket.to(room).emit("stop_typing");
    });
  });
});

http.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
