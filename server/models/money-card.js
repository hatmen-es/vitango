const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const MoneyCardSchema = new Schema({
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
},{
  timestamps: {
    createdAt: "created",
  }
});

module.exports = Mongoose.model('MoneyCard', MoneyCardSchema);
