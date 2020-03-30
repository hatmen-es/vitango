const Commerce = require('../models/commerce');

exports.createCommerce = async (name, description, phoneNumber, cityId, bizum, bankAccount, discount) => {
  const commerce = new Commerce({
    name,
    description,
    city: cityId,
    bizum,
    bankAccount,
    discount
  });
  await commerce.save();
  return commerce
};

exports.updateCommerce = async (id, name, description, phoneNumber, cityId, bizum, bankAccount, discount) => {
  const updated = await Commerce.updateOne({ _id: id }, {
    $set: {
      name,
      description,
      phoneNumber,
      cityId,
      bizum,
      bankAccount,
      discount
    },
  });
  await updated.save();
  return updated
};

exports.deleteCommerce = async (id) => {
  const deletedItem = await Commerce.updateOne({ _id: id}, {
    $set: { deleted: true },
  });
  await deletedItem.save();
  return true;
};

exports.getCommerceById = async (id) => {
  const item = await Commerce.findOne({ _id: id, deleted: false });
  return item || {};
};

exports.getCommercesByName = async (textQuery) => {
  const items = await Commerce.find({ $text: { $search: textQuery }, deleted: false });
  return items || [];
};

exports.getCommercesByCity = async (cityId) => {
  const items = await Commerce.find({ city: cityId, deleted: false });
  return items || [];
};
