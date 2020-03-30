const express = require('express');
const router = express.Router();

const { doLogin, doRegister } = require("../../controllers/auth");

router.post('/login', doLogin);
router.post('/register', doRegister);

module.exports = router;
