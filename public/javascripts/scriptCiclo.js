//=================================== Pestaña de Ciclos ===================================//
function cargarMoniciones(ciclo, tiempo, idSelector){
    fetch(`https://apimonicionesliturgicas.fly.dev/api/moniciones/ciclo/${ciclo}/tiempo/${tiempo}`, {method: 'GET'})
        .then(respuesta => {return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            let monicionAMostrar = document.querySelector(idSelector);
            //console.log(monicion);
            monicion.forEach(monicion => {
                const row = document.createElement("tr");
                row.innerHTML += `
                <ul>
                    <li class="lista"><a href="/monicion?titulo=${monicion.titulo}&dia=${monicion.dia}&semana=${monicion.semana}&ciclo=${monicion.ciclo}&tiempo=${monicion.tiempo}&id=${monicion.id}" target="_blank"><i class="fas fa-cross"></i> ${monicion.titulo} ${monicion.dia} ${monicion.semana}<i class="fas fa-angle-double-right"></i></a></li>
                </ul>  
                `;
                monicionAMostrar.appendChild(row);
                })
            })
        .catch(error => console.log("Hubo un Error: " + error.message))
}


var objUrlParams = new URLSearchParams(window.location.search);
//console.log(objUrlParams.get('ciclo'));
let ciclo = objUrlParams.get('ciclo');

cargarMoniciones(ciclo, 'de Adviento', "#adviento");
cargarMoniciones('A, B y C', 'de Navidad', "#navidad");
cargarMoniciones('A, B y C', 'ordinario', "#ordinario1");
cargarMoniciones(ciclo, 'ordinario', "#ordinario2");
cargarMoniciones(ciclo, 'de cuaresma', "#cuaresma");
cargarMoniciones('A, B y C', 'del triduo pascual', "#triduo");
cargarMoniciones(ciclo, 'Pascual', "#pascual1");
cargarMoniciones('A, B y C', 'Pascual', "#pascual2");

