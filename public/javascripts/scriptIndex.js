//=================================== INDEX ===================================//
function cargarMonicionDelDia(fecha){
    fetch(`http://localhost:7000/api/moniciones/fecha/${fecha}`, {method: 'GET'})
        .then(respuesta =>{return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            //console.log(monicion[0].fecha);
            const row = document.createElement("tr");
                let monicionAMostrar = document.querySelector('#monicionDelDia');
                const event = new Date();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                //alert(event.toLocaleDateString(undefined, options));
                let dia = event.toLocaleDateString(undefined, options);
                row.innerHTML += `
                  <h4>Monicion del Día ${dia}</h4>
                  <h4>${monicion[0].titulo} ${monicion[0].dia} ${monicion[0].semana}</h4>
                    <p><b>Ciclo ${monicion[0].ciclo} - Tiempo ${monicion[0].tiempo}</b><img class="imgC" src="/images/casullaVerde.svg" alt="Moniciones Litúrgicas"> </h5></p>
                    <h5>Monición de Entrada</h5>
                    <p>${monicion[0].entrada}</p>
                    <h5>Monición de las Lecturas</h5>
                      <p>${monicion[0].lecturas}</p>
                    <a class="boton2" id="boton${monicion[0].id}${monicion[0].fecha}" onclick="cerrar('boton${monicion[0].id}${monicion[0].fecha}');mostrar('flotante${monicion[0].id}${monicion[0].fecha}')" >Leer más   <i class="fas fa-book-reader"></i></a>
                    <div class="flotantes" id="flotante${monicion[0].id}${monicion[0].fecha}">
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
                      <a class="boton2" onclick="mostrar('boton${monicion[0].id}${monicion[0].fecha}');cerrar('flotante${monicion[0].id}${monicion[0].fecha}')">Cerrar  <i class="far fa-times-circle"></i></a>
                    </div>
                  `;
                  monicionAMostrar.appendChild(row);
        })
        .catch(error => console.log("Hubo un Error: " + error.message))
}

function cargarMonicionElegida(fecha, idSelector){
    fetch(`http://localhost:7000/api/moniciones/fecha/${fecha}`, {method: 'GET'})
        .then(respuesta => {return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            const row = document.createElement("tr");
            let monicionAMostrar = document.querySelector(idSelector);
            row.innerHTML += `
              <h4>${monicion[0].titulo} ${monicion[0].dia} ${monicion[0].semana}</h4>
                <p><b>Ciclo:</b> ${monicion[0].ciclo} - <b>Tiempo:</b> ${monicion[0].tiempo}</p>
                <h5>Monición de Entrada</h5>
                    <p>${monicion[0].entrada}</p>
                <a class="boton2" id="boton${monicion[0].id}" onclick="cerrar('boton${monicion[0].id}');mostrar('flotante${monicion[0].id}')" >Leer más <i class="fas fa-book-reader"></i></a>
                <div class="flotantes" id="flotante${monicion[0].id}">
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
                    <a class="boton2" onclick="mostrar('boton${monicion[0].id}');cerrar('flotante${monicion[0].id}')">Cerrar  <i class="far fa-times-circle"></i></a>
                </div>
                `;
            monicionAMostrar.appendChild(row);
    })
    .catch(error => console.log("Hubo un Error: " + error.message))
}

cargarMonicionElegida('2021-09-23', "#monicionFestividadPatronal");
cargarMonicionElegida('2021-09-24',"#monicionFestividadMariana");

function mostrar(id) {
    let elemento = document.getElementById(id);
    elemento.style.display = 'inline-block';
}

function cerrar(id) {
    let elemento = document.getElementById(id);
    elemento.style.display = 'none';
}

function cargarMonicionCarousel(fecha, idSelector, img){
    fetch(`http://localhost:7000/api/moniciones/fecha/${fecha}`, {method: 'GET'})
        .then(respuesta => {return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            let monicionAMostrar = document.querySelector(idSelector);
            const row = document.createElement("div");
                row.innerHTML += `
                  <a href="/moniciones/${monicion[0].id}?titulo=${monicion[0].titulo}&dia=${monicion[0].dia}&semana=${monicion[0].semana}&ciclo=${monicion[0].ciclo}&tiempo=${monicion[0].tiempo}" target="_blank"><img src="${img}" class="d-block w-100" alt="Monición del ${monicion[0].titulo} ${monicion[0].dia} de la Semana ${monicion[0].semana} del tiempo ${monicion[0].tiempo}- Moniciones Liturgicas.com"></a>
                  <div class="carousel-caption d-md-block">
                    <h5>Monicion del ${monicion[0].titulo} ${monicion[0].dia} de la Semana ${monicion[0].semana} del tiempo ${monicion[0].tiempo} - Ciclo ${monicion[0].ciclo}</h5>
                    <a class="boton" href="/monicion?titulo=${monicion[0].titulo}&dia=${monicion[0].dia}&semana=${monicion[0].semana}&ciclo=${monicion[0].ciclo}&tiempo=${monicion[0].tiempo}&id=${monicion[0].id}" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
                  </div>  
                    `;
                monicionAMostrar.appendChild(row);
        })
        .catch(error => console.log("Hubo un Error: " + error.message))
}

function cargarMonicionD(fecha, idSelector, img){
    fetch(`http://localhost:7000/api/moniciones/fecha/${fecha}`, {method: 'GET'})
        .then(respuesta => {return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            let monicionAMostrar = document.querySelector(idSelector);
            const row = document.createElement("tr");
                row.innerHTML += `
                <a href="/moniciones/${monicion[0].id}" target="_blank"><img src="${img}" class="card-img-top" alt="${monicion[0].titulo} ${monicion[0].dia} de la Semana ${monicion[0].semana} del tiempo ${monicion[0].tiempo} - MonicionesLitúrgicas.com"><a>
                    <div class="card-body">
                      <h5 class="card-title">Monicion del ${monicion[0].titulo} ${monicion[0].dia} de la Semana ${monicion[0].semana} del tiempo ${monicion[0].tiempo} - Ciclo ${monicion[0].ciclo}</h5>
                        <a class="boton3" href="/monicion?titulo=${monicion[0].titulo}&ciclo=${monicion[0].ciclo}&tiempo=${monicion[0].tiempo}&id=${monicion[0].id}" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
                    </div>
                    `;
                monicionAMostrar.appendChild(row);
        })
        .catch(error => console.log("Hubo un Error: " + error.message))
}


window.onload = function ejemplo2(){
  setTimeout('funcionProgramada()', hora());
}

function hora() {
  horaActual = new Date();
  horaProgramada = new Date();
  horaProgramada.setHours(0);
  horaProgramada.setMinutes(0);
  horaProgramada.setSeconds(2);
  return horaProgramada.getTime() - horaActual.getTime();
}

function sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

function funcionProgramada() {
  let objFecha = new Date();
  let dia  = ('0' + objFecha.getDate()).slice(-2);
  let mes  = ('0' + (objFecha.getMonth()+1)).slice(-2);
  let anio = objFecha.getFullYear();
  cargarMonicionDelDia(anio + "-" + mes + "-" + dia);
  
  let objFecha2 = sumarDias(objFecha, 1);
  let dia2  = ('0' + objFecha2.getDate()).slice(-2);
  let mes2  = ('0' + (objFecha2.getMonth()+1)).slice(-2);
  let anio2 = objFecha2.getFullYear();
  cargarMonicionCarousel(anio2 + "-" + mes2 + "-" + dia2, "#carousel1", "/images/Viernes.jpg");
  //console.log(anio2 + "-" + mes2 + "-" + dia2);

  let objFecha3 = sumarDias(objFecha, 1);
  let dia3  = ('0' + objFecha3.getDate()).slice(-2);
  let mes3  = ('0' + (objFecha3.getMonth()+1)).slice(-2);
  let anio3 = objFecha3.getFullYear();
  cargarMonicionCarousel(anio3 + "-" + mes3 + "-" + dia3, "#carousel2", "/images/Sabado.jpg");
  //console.log(anio3 + "-" + mes3 + "-" + dia3);
  
  let objFecha4 = sumarDias(objFecha, 1);
  let dia4  = ('0' + objFecha4.getDate()).slice(-2);
  let mes4  = ('0' + (objFecha4.getMonth()+1)).slice(-2);
  let anio4 = objFecha4.getFullYear();
  cargarMonicionCarousel(anio4 + "-" + mes4 + "-" + dia4, "#carousel3", "/images/Domingo.jpg");
  //console.log(anio4 + "-" + mes4 + "-" + dia4);
}


cargarMonicionD('2021-09-26', "#mDominical1", "/images/Martes.jpg");
cargarMonicionD('2021-10-03', "#mDominical2", "/images/Miercoles.jpg");
cargarMonicionD('2021-10-10', "#mDominical3", "/images/Jueves.jpg");
