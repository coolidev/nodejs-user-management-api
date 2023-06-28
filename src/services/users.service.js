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
    newUser._id = data.users[data.users.length - 1]._id;
  }
  data.users.push(newUser);
  return fetchUser(newUser._id);
}

module.exports = {
  fetchUser,
  fetchUsers,
  addUser
};
