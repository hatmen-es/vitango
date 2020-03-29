
const { createCommerce } = require("../services/commerces");
const { generateDefaultCards } = require("../services/gift-cards");

exports.postCommerce = async (req, res) => {
  try {
    // TODO: validate body
    const {
      name,
      description,
      images,
      cityId
    } = req.body;
    const commerce = await createCommerce({ name, description, images }, req.user.id, cityId);
    const cards = await generateDefaultCards(commerce.id);

    res.status(200).json({ commerce, cards });
  } catch (e) {
    res.status(400).json({
      error: "Something went wrong"
    });
  }
}