
exports.signupEmail = name => {
  const message = {
    subject: 'Account Registration',
    text:
      `Hi ${name.firstName} ${
        name.lastName
      }! Thank you for creating an account with Us!. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };

  return message;
};

exports.subscribeEmail = () => {
  const message = {
    subject: 'Newsletter Subscription',
    text:
      `You are receiving this email because you subscribed to our newsletter. \n\n` +
      `If you did not request this change, please contact us immediately.`
  };

  return message;
};

exports.contactEmail = () => {
  const message = {
    subject: 'Contact Us',
    text: `We received your message! one of our customer service will call you soon. \n\n`
  };

  return message;
};

exports.sellApplyEmail = () => {
  const message = {
    subject: 'Sell With Mo Store',
    text: `We received your application! Our team will contact you soon. \n\n`
  };

  return message;
};
