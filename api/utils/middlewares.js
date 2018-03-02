const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    bcrypt
      .hash(password, SaltRounds)
      .then(hashedPassword => {
        req.user = { username, password: hashedPassword };
        next();
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    res.status(422).json({ error: 'Username and Password are required.' });
  }
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    User.findOne({ username })
    .then(user => {
      bcrypt
        .compare(password, user.password)
        .then(response => {
          if (response) {
            req.username = user.username;
            next();
          } else {
            res.status(422).json({ error: 'Please enter the correct Username or Password.' });
          }
        })
        .catch(err => {
          res.send({ error:'Failed to log in'});
        });
    })
    .catch(err => {
      res.status(422).json({ error: `Cannot find ${username}, please try again.` });
    });
  }
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
