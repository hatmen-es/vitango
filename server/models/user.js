const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    is_subscribed: { type: Boolean }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['ROLE_MEMBER', 'ROLE_ADMIN', 'ROLE_COLLABORATOR'],
    default: 'ROLE_ADMIN'
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});

module.exports = Mongoose.model('User', UserSchema);
