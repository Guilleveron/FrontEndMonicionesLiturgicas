var express = require('express');
var router = express.Router();
const monicionesController= require("../controllers/monicionesController");

/* GET home page. */
router.get('/',monicionesController.index);


module.exports = router;
