const usersService = require('../services/users.service');

const fetchUsers = function (req, res) {
  res.send(usersService.fetchUsers());
}

const addUser = function (req, res) {
  // res.send(usersService.addUser(req.body))
}

const fetchUser = function (req, res) {
  res.send(usersService.fetchUser(req.params._id));
}

module.exports = {
  fetchUser, // return one user
  fetchUsers, // return all users
  addUser, // add and return new user
};
