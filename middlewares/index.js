var express = require('express');
var router = express.Router();

router.get('*', require('./load_partials'));

module.exports = router;