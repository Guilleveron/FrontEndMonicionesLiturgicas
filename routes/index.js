var express = require('express');
var router = express.Router();
const inicioController= require("../controllers/inicioController");


router.get('/',inicioController.index);
router.get('/Nosotros',inicioController.nosotros);
router.get('/buscar',inicioController.buscar);



module.exports = router;
