const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
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
