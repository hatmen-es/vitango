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
  hash: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  transaction: {
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
    required: true,
  },
  isConsumed: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
},{
  timestamps: {
    createdAt: "created",
  }
});

module.exports = Mongoose.model('GiftCard', GiftCardSchema);
