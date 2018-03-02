const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  User.create(req.user)
    .then(user => {
      res
        .status(200)
        .json({ message: `${user.username} created.` });
    })
    .catch(err => {
      res.status(500).json({ error: 'Looks like something went wrong during creation. Please try again!' });
    });
};

module.exports = {
  createUser
};
