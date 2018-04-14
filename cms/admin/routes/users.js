var express = require('express');
var router = express.Router();
var datacreat = require('../controllers/uesr.controller');
router.post('/data',datacreat.create);

module.exports = router;
