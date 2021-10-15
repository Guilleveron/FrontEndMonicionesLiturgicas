//=================================== Pestaña para ver una Monición ===================================//
var objUrlParams = new URLSearchParams(window.location.search);
//console.log(objUrlParams.get('id'));
let id = objUrlParams.get('id');


function cargarMonicion(){
    fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/${id}`, {method: 'GET'})
        .then(respuesta =>{return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            //console.log(monicion);
            const row = document.createElement("tr");
                let monicionAMostrar = document.querySelector('#monicionSeleccionada');
                row.innerHTML += `
                    <h4>${monicion[0].titulo} ${monicion[0].dia} de la Semana ${monicion[0].semana} del tiempo ${monicion[0].tiempo}</h4>
                    <p><b>Ciclo: </b>${monicion[0].ciclo}</p>
                    <h5>Monición de Entrada</h5>
                    <p>${monicion[0].entrada}</p>
                    <h5>Monición de las Lecturas</h5>
                    <p>${monicion[0].lecturas}</p>
                    <h5>Oración Universal</h5>
                    <p>A cada intención respondemos: <b>${monicion[0].respuestaOracionUniversal}</b><br></p>
                    <ol>
                        <li>${monicion[0].oracionUniversal1} <b>Oremos.</b></li>
                        <li>${monicion[0].oracionUniversal2} <b>Oremos.</b></li>
                        <li>${monicion[0].oracionUniversal3} <b>Oremos.</b></li>
                        <li>${monicion[0].oracionUniversal4} <b>Oremos.</b></li>
                        <li>${monicion[0].oracionUniversal5} <b>Oremos.</b></li>
                    </ol>
                    <h5>Presentación de las Ofrendas</h5>
                    <p>${monicion[0].presentacionDeLasOfrendas}</p>
                    <h5>Monición Antes de la Comunión</h5>
                    <p>${monicion[0].comunion}</p>
                    <h5>Monición de Despedida</h5>
                    <p>${monicion[0].despedida}</p>
                  `;
                  monicionAMostrar.appendChild(row);
        })
        .catch(error => console.log("Hubo un Error: " + error.message))
}
cargarMonicion();
