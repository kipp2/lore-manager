const express = require('express');
const router = express.Router();
const { generateLore } = require('../controllers/loreAIControllers');


router.post('/', generateLore);

module.exports = router;
