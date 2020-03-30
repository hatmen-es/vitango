const Transaction = require('../models/commerce');

exports.createTransaction = async (name, description, phoneNumber, cityId, bizum, bankAccount, discount) => {
  const transaction = new Transaction({
    name,
    description,
    city: cityId,
    bizum,
    bankAccount,
    discount
  });
  await transaction.save();
  return transaction
};

exports.updateTransaction = async (id, client, quantity, commerce, isConfirmed) => {
  const updated = await Transaction.updateOne({ _id: id }, {
    $set: { client, quantity, commerce, isConfirmed },
  });
  await updated.save();
  return updated
};

exports.deleteTransaction = async (id) => {
  const deletedItem = await Transaction.updateOne({ _id: id}, {
    $set: { deleted: true },
  });
  await deletedItem.save();
  return true;
};

exports.getTransactions = async ({ query, select, cursor }) => {
  const newQuery = { ...query, deleted: false };
  const items = await Transaction.find(newQuery, select, cursor);
  return items || [];
};
