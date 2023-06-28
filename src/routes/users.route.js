const express = require('express');
const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

router.route('/')
  .get(usersController.fetchUsers);

router.route('/')
  .post(usersController.addUser);

router.route('/user/:_id')
  .get(usersController.fetchUser);

module.exports = router;
