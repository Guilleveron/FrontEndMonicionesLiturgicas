var monicio=require('../model/monicion');
module.exports={

    index:function(req,res){

       res.render('index', { script: `/javascripts/scriptIndex.js`});
          
    },
    nosotros: function (req, res){
        res.render('nosotros', {
            titulo: 'Sobre Nosotros',
            script: ``
        });
    },
    buscar: function (req, res){
        res.render('buscadorDeMonicion', {
            busqueda: req.query.monición,
            script: `/javascripts/scriptBuscadorDeMoniciones.js`
        });
    },
    ciclo:function(req,res){
        //console.log(req.params);
        res.render('ciclo', { 
            ciclo: req.query.ciclo,
            santo: req.query.santo,

            script: `/javascripts/scriptCiclo.js`
        });
    },
    monicionId:function(req,res){
        //console.log(req.params);
        res.render('monicion', { 
            id: req.query.id,
            dia: req.query.dia,
            semana: req.query.semana,
            titulo: req.query.titulo,
            ciclo: req.query.ciclo,
            tiempo: req.query.tiempo,

            script: `/javascripts/scriptMonicion.js`
        });
    }
}
