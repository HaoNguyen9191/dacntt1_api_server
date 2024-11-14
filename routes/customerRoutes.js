const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerControllers.js');

router.get('/', customerController.getProdList)
router.post('/')
router.put('/')
router.delete('/')

module.exports = router;