const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const PhoneNumber = require('awesome-phonenumber');
const EmailValidator = require("email-validator");
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);

const TransactionSchema = new Schema({
  client: {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: email => EmailValidator.validate(email),
        message: props => `${props.value} is not a valid email!`
      },
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: phone => PhoneNumber(phone).isMobile(),
        message: props => `${props.value} is not a phone number!`
      },
    }
  },
  commerce: {
    type: Schema.Types.ObjectId,
    ref: "Commerce",
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "updated",
  }
});

module.exports = Mongoose.model('Transaction', TransactionSchema);
