const chatForm = document.querySelector("#chat-form");
const chatMessage = document.querySelector(".chat-messages");
const room_name = document.querySelector("#room-name");
const users_list = document.querySelector("#users");

const socket = io();

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

//Listen to roomUser event
socket.on("roomUser", (roomInfo) => {
  console.log(roomInfo);
  let newUserList = roomInfo
    .map((user) => `<li>${user.username}</li>`)
    .join("");
  room_name.innerHTML = room;
  users_list.innerHTML = newUserList;
});

//Join chatroom
socket.emit("joinRoom", { username, room });

socket.on("message", (message) => {
  const time = new Date().toLocaleTimeString("en-IT");
  let div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">${username} <span>${time}</span></p>
  <p class="text">
    ${message}
  </p>`;
  chatMessage.append(div);
  chatMessage.scrollTop = chatMessage.scrollHeight;
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Get message from the input
  const msg = e.target.msg.value;

  socket.emit("chatMessage", msg);

  e.target.msg.value = "";
});
