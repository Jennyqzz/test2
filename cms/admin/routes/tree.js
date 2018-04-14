var express = require('express');
var router = express.Router();
var datacreat = require('../controllers/tree.controller');

router.post('/data',datacreat.create);
router.put('/data/:id',datacreat.update);
router.get('/list/:type',datacreat.list);

module.exports = router;
