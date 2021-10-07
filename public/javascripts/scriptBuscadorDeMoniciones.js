//=================================== Pestaña de Busqueda de Moniciones ===================================//
const formulario = document.querySelector('#formulario');
const botonFormulario = document.querySelector('#botonFormulario');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    //console.log(formulario.value);
    resultado.innerHTML = '';

    fetch(`http://localhost:7000/api/moniciones/`, {method: 'GET'})
        .then(response => {return response.json()})//indicamos el formato en que se desea obtener la informacion
        .then(moniciones => {
            const texto = formulario.value.toLowerCase();
             
            for (let monicion of moniciones){

                
                let datosDebusqueda = monicion.titulo.toLocaleLowerCase() + " " + monicion.dia.toLocaleLowerCase() + " " + monicion.semana.toLocaleLowerCase() + " " + "- tiempo" + " " + monicion.tiempo.toLocaleLowerCase() + " - ciclo" + " " + monicion.ciclo.toLocaleLowerCase();
                
                if(datosDebusqueda.indexOf(texto) !== -1 ){
                    //console.log(monicion);
                    resultado.innerHTML += `
                    <li><a href="/moniciones/${monicion.id}?titulo=${monicion.titulo}&dia=${monicion.dia}&semana=${monicion.semana}&ciclo=${monicion.ciclo}&tiempo=${monicion.tiempo}" target="_blank"><i class="fas fa-search"></i>${monicion.titulo} ${monicion.dia} ${monicion.semana} - Tiempo ${monicion.tiempo} - Ciclo ${monicion.ciclo} <i class="fas fa-angle-double-right"></i></a></li>
                    `
                }
            }
            if(resultado.innerHTML === ''){
                resultado.innerHTML += `
                    <li>No se ha encontrado la monición</li>
                    `
            }        
        })    
        .catch(error => console.log("Hubo un Error: " + error.message))

    
}

botonFormulario.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();