const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUserByQRID, getUserByName } = require('../controllers/qrController')

router.post('/', createUser);

router.get('/', getAllUsers);
router.get('/by-qrid/:qrid', getUserByQRID);
router.get('/search', getUserByName);

module.exports = router;