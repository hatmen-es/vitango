const { createCity, updateCity } = require("../services/cities");
const { updateCity } = require("../services/users");

exports.postCity = async (req, res) => {
  try {
    const {
      name,
      description
    } = req.body;
    const { _id: userId } = req.user;

    const city = await createCity(userId, name, description);
    const updatedUser = await updateCity(userId, city._id);

    res.status(200).json({ city, user: updatedUser });
  } catch (e) {
    res.status(400).json({
      error: "Something went wrong"
    })
  }
};