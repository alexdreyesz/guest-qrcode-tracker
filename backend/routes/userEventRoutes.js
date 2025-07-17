const express = require('express');
const router = express.Router();
const { createUserEvent } = require('../controllers/userEventsController');

router.post('/', createUserEvent);

module.exports = router;