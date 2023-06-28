let data = require('../data');

const fetchUsers = function () {
  return data.users;
}

const fetchUser = function (_id) {
  return fetchUsers().find(user => user._id == _id);
}

const addUser = function (user) {
  let newUser = user;
  if (user._id === undefined) {
    newUser._id = data.users[data.users.length - 1]._id + 1;
  }
  data.users.push(newUser);
  return fetchUser(newUser._id);
}

const updateUser = function (user) {
  let idxToUpdate = fetchUsers().findIndex(u => u._id == user._id);
  data.users[idxToUpdate] = user;
  return fetchUser(user._id)
}

module.exports = {
  fetchUser,
  fetchUsers,
  addUser,
  updateUser
};
