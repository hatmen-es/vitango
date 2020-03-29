
exports.loginValidation = (req) => {
  const { email, password } = req.body;

  if (!email) {
    return { error: 'You must enter an email address.' };
  }

  if (!password) {
    return { error: 'You must enter a password.' };
  }

  return {}
};

exports.registerValidation = (req) => {
  const {
    email,
    firstName,
    lastName,
    password
  } = req.body;

  if (!email) {
    return { error: 'You must enter an email address.' };
  }

  if (!firstName || !lastName) {
    return { error: 'You must enter your full name.' };
  }

  if (!password) {
    return {error: 'You must enter a password.'};
  }

  return {};
};