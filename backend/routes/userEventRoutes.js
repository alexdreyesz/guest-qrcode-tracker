const express = require('express');
const router = express.Router();
const { createUserEvent, getUserEvent } = require('../controllers/userEventsController');

router.post('/', createUserEvent);

router.get('/:userID', getUserEvent);

module.exports = router;