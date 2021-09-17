module.exports={

    index:function(req,res){

        res.render('moniciones/index', { 
            title: 'Página de'});
    },
    monicionId:function(req,res){
        //console.log(req.params);
        res.render('moniciones/monicion', { 
            id: req.params.id,
            dia: req.query.dia,
            semana: req.query.semana,
            titulo: req.query.titulo,
            ciclo: req.query.ciclo,
            tiempo: req.query.tiempo
        });
    },
    ciclo:function(req,res){
        //console.log(req.params);
        res.render('ciclo', { 
            ciclo: req.params.ciclo
        });
    }
}