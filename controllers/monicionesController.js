module.exports={

    index:function(req,res){

        res.render('moniciones/index', { 
            title: 'Página de',
            script: `/javascripts/scriptMonicionesIndex.js`
        });
    }
}