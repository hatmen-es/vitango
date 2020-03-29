const City = require('../models/city.js');

const createResult = (city) => {
  if (!city) return {};
  const { _id, name, description, created } = city;
  return { _id, name, description, created };
};

exports.createCity = async (userId, name, description) => {
  const city = new City({
    name,
    description,
    admin: userId,
  });
  await city.save();
  return createResult(city);
};

exports.updateCity = async (cityId, name, description) => {
  const updatedCity = await City.updateOne({ _id: cityId }, {
    $set: { name, description },
  });
  await updatedCity.save();
  return createResult(updatedCity);
};

exports.deleteCity = async (cityId) => {
  const deletedCity = await City.updateOne({ _id: cityId}, {
    $set: { deleted: true },
  });
  await deletedCity.save();
  return true;
};

exports.getCityByName = async (name) => {
  const city = await City.findOne({ name });
  return createResult(city);
};

exports.getCityById = async (cityId) => {
  const city = await City.findOne({ _id: cityId});
  return createResult(city);
};

exports.getAllCities = async () => {
  const cities = await City.find({ deleted: false });
  return cities ? cities.map(createResult) : []

};
