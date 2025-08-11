const express = require('express'); 
const router = express.Route(); 
const {getEntries, createEntry} = require('../controllers/entryController');

router.get('/', getEntries); 
router.post('/', createEntry);

module.exports = router;