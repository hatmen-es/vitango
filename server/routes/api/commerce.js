const express = require('express');
const router = express.Router();
const passport = require('passport');

// Bring in Models & Helpers
const Commerce = require('../../models/commerce');
const { isAdmin } = require("../middlewares/auth");
const { postCommerce } = require("../../controllers/commerces");

router.post("/", passport.authenticate('jwt', { session: false }), isAdmin, postCommerce);

router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const name = req.body.name;
    const description = req.body.description;

    if (!description || !name) {
      return res
        .status(422)
        .json({ error: 'You must enter description & name.' });
    }

    const brand = new Commerce({
      name,
      description
    });

    brand.save((err, brand) => {
      if (err) {
        return res.status(422).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        success: true,
        message: `Brand has been added successfully!`,
        brand: brand
      });
    });
  }
);

// fetch all brands api
router.get('/list', (req, res) => {
  Commerce.find({}, (err, data) => {
    if (err) {
      return res.status(422).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
    res.status(200).json({
      brands: data
    });
  });
});

router.get(
  '/list/select',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Commerce.find({}, 'name', (err, data) => {
      if (err) {
        return res.status(422).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        brands: data
      });
    });
  }
);

router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Commerce.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(422).json({
          error: 'Your request could not be processed. Please try again.'
        });
      }

      res.status(200).json({
        success: true,
        message: `Brand has been deleted successfully!`,
        brand: data
      });
    });
  }
);

module.exports = router;
