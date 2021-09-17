var express = require('express');
var router = express.Router();
const monicionesController= require("../controllers/monicionesController");

/* GET home page. */
router.get('/',monicionesController.index);
router.get('/:id',monicionesController.monicionId);
router.get('/:id?titulo=&ciclo=&tiempo=',monicionesController.monicionId);
router.get('/:id?dia=&semana=&ciclo=&tiempo',monicionesController.monicionId);
router.get('/ciclo/:ciclo',monicionesController.ciclo);



module.exports = router;
