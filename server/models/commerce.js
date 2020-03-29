const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
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
    trim: true
  },
  slug: { type: String, slug: 'name', unique: true },
  images: [{
    data: Buffer,
    contentType: String
  }],
  description: {
    type: String,
    trim: true
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City"
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "updated",
  }
});

module.exports = Mongoose.model('Commerce', CommerceSchema);
