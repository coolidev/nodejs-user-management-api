const express = require('express');
const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

router.route('/')
  .get(usersController.fetchUsers)
  .post(usersController.addUser);

router.route('/:_id')
  .get(usersController.fetchUser)
  .post(usersController.updateUser)

module.exports = router;
