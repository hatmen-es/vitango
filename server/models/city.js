const Mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = Mongoose;

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120
};

Mongoose.plugin(slug, options);

// Category Schema
const CitySchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  name: {
    type: String,
    trim: true
  },
  slug: { type: String, slug: 'name', unique: true },
  description: {
    type: String,
    trim: true
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "updated",
  }
});

CitySchema.index({ name: 'text' });

module.exports = Mongoose.model('City', CitySchema);
