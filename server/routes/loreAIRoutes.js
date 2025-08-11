const express = require('express');
const router = express.Route();
const {generateLore} = require('../controllers/loreAIControllers');

router.post('/', generateLore);

module.exports = router;

