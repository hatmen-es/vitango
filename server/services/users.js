const User = require("../models/user");

const updateCity = async (userId, cityId) => {
  const updatedUser = await User.updateOne({ _id: userId }, {
    $set: { city: cityId }
  });
  await updatedUser.save();
  return updatedUser;
};

exports = {
  updateCity
};