const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const PhoneNumber = require('awesome-phonenumber');
const IBAN = require('iban');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);

const CommerceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  slug: { type: String, slug: 'name', unique: true },
  images: [{
    data: Buffer,
    contentType: String
  }],
  description: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    validate: {
      validator: phone => {
        const parsedNumber = PhoneNumber(phone);
        return parsedNumber.isMobile() || parsedNumber.isFixedLine();
      },
      message: props => `${props.value} is not a phone number!`
    },
  },
  bizum: {
    type: String,
    trim: true,
    validate: {
      validator: phone => PhoneNumber(phone).isMobile(),
      message: props => `${props.value} is not a phone number!`
    },
  },
  bankAccount: {
    type: String,
    trim: true,
    validate: {
      validator: IBAN.isValid,
      message: props => `${props.value} is not a valid IBAN!`
    },
  },
  discount: {
    type: Number,
    min: 0,
    max: 50,
  },
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "updated",
  }
});

module.exports = Mongoose.model('Commerce', CommerceSchema);
