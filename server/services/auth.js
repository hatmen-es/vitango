const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const key = process.env.SECRET_OR_KEY;

const createResult = (user) => {
  const { id, profile, email, role } = user;
  return { id, profile, email, role };
};

const loginError = () => ({ error: "Password incorrect" });

exports.register = async (email, password, profile) => {
  const user = new User({
    email,
    password,
    profile
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  user.password = hash;
  await user.save();

  const payload = { id: user.id };
  const token = await jwt.sign(payload, key, { expiresIn: 3600 });

  return { user: createResult(user), token };
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  const matched = await bcrypt.compare(password, user.password);
  if (matched) {
    const payload = { id: user.id };
    const token = jwt.sign(payload, key, { expiresIn: 3600 });
    return { user: createResult(user), token };
  }
  return loginError();
};
