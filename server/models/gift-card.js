const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);

const GiftCardSchema = new Schema({
  description: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number
  },
  commerce: {
    type: Schema.Types.ObjectId,
    ref: 'Commerce'
  },
  used: {
    type: Boolean,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = Mongoose.model('GiftCard', GiftCardSchema);
