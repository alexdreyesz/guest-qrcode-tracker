const express = require('express');
const router = express.Router();
const { createUserEvent, getUserEvent, updateScannedCondition } = require('../controllers/userEventsController');

router.post('/', createUserEvent);

router.get('/:userID', getUserEvent);

router.put('/:userID', updateScannedCondition);

module.exports = router;