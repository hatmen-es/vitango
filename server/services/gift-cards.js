const GiftCard = require('../models/gift-card');

exports.generateDefaultCards = async (commerceId) => {
  // TODO: generate default gift cards
  return []
};

exports.createGiftCard = async (quantity, transaction) => {
  const item = new GiftCard({
    quantity,
    transaction,
    hash: '' // TODO: Generate hash
  });
  await item.save();
  return item
};

exports.updateGiftCard = async (id, quantity, isConsumed) => {
  // TODO: Hash validation
  const updated = await GiftCard.updateOne({ _id: id }, {
    $set: { quantity, isConsumed },
  });
  await updated.save();
  return updated
};

exports.deleteGiftCard = async (id) => {
  const deletedItem = await GiftCard.updateOne({ _id: id}, {
    $set: { deleted: true },
  });
  await deletedItem.save();
  return true;
};

exports.getGiftCards = async ({ query, select, cursor }) => {
  const newQuery = { ...query, deleted: false };
  const items = await GiftCard.find(newQuery, select, cursor);
  return items || [];
};
