//=================================== Pestaña de Todas las Moniciones ===================================//
function cargarMoniciones(ciclo, tiempo, idSelector){
    fetch(`http://localhost:7000/api/moniciones/ciclo/${ciclo}/tiempo/${tiempo}`, {method: 'GET'})
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

cargarMoniciones('A', 'de Adviento', "#advientoA");
cargarMoniciones('A, B y C', 'de Navidad', "#navidadA");
cargarMoniciones('A, B y C', 'ordinario', "#ordinarioA1");
cargarMoniciones('A', 'ordinario', "#ordinarioA2");
cargarMoniciones('A', 'de cuaresma', "#cuaresmaA");
cargarMoniciones('A, B y C', 'del triduo pascual', "#triduoA");
cargarMoniciones('A', 'Pascual', "#pascualA1");
cargarMoniciones('A, B y C', 'Pascual', "#pascualA2");

cargarMoniciones('B', 'de Adviento', "#advientoB");
cargarMoniciones('A, B y C', 'de Navidad', "#navidadB");
cargarMoniciones('A, B y C', 'ordinario', "#ordinarioB1");
cargarMoniciones('B', 'ordinario', "#ordinarioB2");
cargarMoniciones('B', 'de cuaresma', "#cuaresmaB");
cargarMoniciones('A, B y C', 'del triduo pascual', "#triduoB");
cargarMoniciones('B', 'Pascual', "#pascualB1");
cargarMoniciones('A, B y C', 'Pascual', "#pascualB2");

cargarMoniciones('C', 'de Adviento', "#advientoC");
cargarMoniciones('A, B y C', 'de Navidad', "#navidadC");
cargarMoniciones('A, B y C', 'ordinario', "#ordinarioC1");
cargarMoniciones('C', 'ordinario', "#ordinarioC2");
cargarMoniciones('C', 'de cuaresma', "#cuaresmaC");
cargarMoniciones('A, B y C', 'del triduo pascual', "#triduoC");
cargarMoniciones('C', 'Pascual', "#pascualC1")
cargarMoniciones('A, B y C', 'Pascual', "#pascualC2");
