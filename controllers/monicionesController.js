module.exports={

    index:function(req,res){

        res.render('moniciones/index', { 
            title: 'Página de'});
    },
    monicionId:function(req,res){
        //console.log(req.params);
        res.render('moniciones/monicion', { 
            identificador: req.params.id});
    },
    monicionTitulo:function(req,res){
        //console.log(req.params);
        res.render('moniciones/monicion', { 
            titulo: req.params.titulo,
            ciclo: req.params.ciclo,
            tiempo: req.params.tiempo
        });
    },
    ciclo:function(req,res){
        //console.log(req.params);
        res.render('ciclo', { 
            ciclo: req.params.ciclo
        });
    }

}