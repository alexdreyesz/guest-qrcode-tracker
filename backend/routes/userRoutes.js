const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUserByQRID } = require('../controllers/qrController')

router.post('/', createUser);

router.get('/', getAllUsers);
router.get('/get-by-qrid/:qrid', getUserByQRID);

module.exports = router;