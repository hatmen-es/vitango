const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Bring in Models & Helpers
const User = require('../../models/user');
const mailgun = require('../../config/mailgun');
const template = require('../../config/template');

const key = process.env.SECRET_OR_KEY;

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email) {
    return res.status(422).json({ error: 'You must enter an email address.' });
  }

  if (!password) {
    return res.status(422).json({ error: 'You must enter a password.' });
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      return res
        .status(422)
        .send({ error: 'no user found for this email address.' });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id };
        jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
          res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user.id,
              profile: {
                firstName: user.profile.firstName,
                lastName: user.profile.lastName,
                is_subscribed: user.profile.is_subscribed
              },
              email: user.email,
              role: user.role
            }
          });
        });
      } else {
        return res.status(404).json({
          success: false,
          error: 'Password Incorrect'
        });
      }
    });
  });
});

router.post('/register', (req, res, next) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const is_subscribed = req.body.isSubscribed;

  if (!email) {
    return res.status(422).json({ error: 'You must enter an email address.' });
  }

  if (!firstName || !lastName) {
    return res.status(422).json({ error: 'You must enter your full name.' });
  }

  if (!password) {
    return res.status(422).json({ error: 'You must enter a password.' });
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res
        .status(422)
        .json({ error: 'That email address is already in use.' });
    }

    const user = new User({
      email,
      password,
      profile: { firstName, lastName, is_subscribed }
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return res.status(422).json({
            error: 'Your request could not be processed. Please try again.'
          });
        }
        user.password = hash;

        user.save((err, user) => {
          if (err) {
            return res.status(422).json({
              error: 'Your request could not be processed. Please try again.'
            });
          }

          const payload = { id: user.id };

          jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              user: {
                id: user.id,
                profile: {
                  firstName: user.profile.firstName,
                  lastName: user.profile.lastName,
                  is_subscribed: user.profile.is_subscribed
                },
                email: user.email,
                role: user.role
              }
            });
          });

          const message = template.signupEmail(user.profile);

          mailgun.sendEmail(user.email, message);
        });
      });
    });
  });
});


module.exports = router;
