const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const port = 3000;
const { userJoin, getRoomUsers, userLeave } = require("./users");

//Set up modules
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Serve static file
app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    userJoin(socket.id, username, room);
    socket.join(room);
    //Welcome currect user
    socket.emit("message", "Welcome to Xccelerate ChatCord!");

    //Broadcast to other users when a user connects
    socket.broadcast
      .to(room)
      .emit("message", `${username} has joined the chat`);

    //Send user and room info
    io.to(room).emit("roomUser", getRoomUsers(room));

    //Listen for chatMessage event
    socket.on("chatMessage", (message) => {
      io.to(room).emit("message", message);
    });
  });

  socket.on("disconnect", () => {
    //Broadcast to other users when a user disconnects
    const user = userLeave(socket.id);

    if (user) {
      socket.broadcast
        .to(user.room)
        .emit("message", `${user.username} has left the chat`);

      //Send users and room info
      io.to(user.room).emit("roomUser", getRoomUsers(user.room));
    }
  });
});

server.listen(port, () => console.log(`Listening to port ${port}`));
