let users = [];

//Join user to chat
function userJoin(id, username, room) {
  const user = { id, username, room };
  users.push(user);
}

//Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

//User leaves chat
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = { userJoin, getRoomUsers, userLeave };
