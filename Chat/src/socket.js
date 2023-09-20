module.exports = (io) => {
  let nickNames = [];

  io.on("connection", (socket) => {
    // console.log("Nuevo usuario conectado");

    socket.on("enviar mensaje", (datos) => {
      // console.log(datos);

      io.sockets.emit("nuevo mensaje", {
        msg: datos,
        username: socket.nickName,
      });
    });

    socket.on("nuevo usuario", (datos, callback) => {
      if (nickNames.indexOf(datos) != -1) {
        callback(false);
      } else {
        callback(true);
        socket.nickName = datos;
        nickNames.push(socket.nickName);

        io.sockets.emit("nombre usuario", nickNames);
      }
    });

    socket.on("disconnect", (datos) => {
      if (!socket.nickName) {
        return;
      } else {
        nickNames.splice(nickNames.indexOf(socket.nickName), 1);
        io.sockets.emit("nombre usuario", nickNames);
      }
    });
  });
};
