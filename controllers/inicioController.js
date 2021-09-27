var conexion=require('../config/conexion');
var monicio=require('../model/monicion');
module.exports={

    index:function(req,res){

       res.render('index', { title: 'Moniciones Litúrgicas'});
          
    },
    nosotros: function (req, res){
        res.render('nosotros', {
            titulo: 'Sobre Nosotros'});
    },
    buscar: function (req, res){
        res.render('buscadorDeMonicion', {
            busqueda: req.query.monición});
    }
}