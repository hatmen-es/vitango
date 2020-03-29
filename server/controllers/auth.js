const { login, register } = require("../services/auth");
const { loginValidation, registerValidation } = require("../validations/auth");
const mailgun = require('../config/mailgun');
const template = require('../config/template');

exports.doRegister = async (req, res) => {
  try{
    const { error } = registerValidation(req);
    if (error) return res.status(422).json(error);
    const {
      email,
      password,
      firstName,
      lastName,
    } = req.body;

    const { user, token } = await register(email, password, { firstName, lastName });

    const message = template.signupEmail(user.profile);
    mailgun.sendEmail(user.email, message);

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user,
    });
  } catch (e) {
    res.status(400).json({
      error: "Something went wrong"
    });
  }
};

exports.doLogin = async (req, res) => {
  try {
    const { error } = loginValidation(req);
    if (error) return res.status(422).json(error);

    const {
      email,
      password,
    } = req.body;

    const { user, token, error: passwordError } = await login(email, password);

    if (passwordError) return res.status(404).json({ success: false, error: passwordError});

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: user,
    });
  } catch (e) {
    res.status(400).json({
      error: e.toString()
    });
  }
};
