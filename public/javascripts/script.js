//===================================BUSCADOR===================================//
//Ejecutando funciones
document.getElementById("ctn-bars-search").addEventListener("click", mostrar_buscador);
document.getElementById("principal").addEventListener("click", ocultar_buscador);
document.getElementById("box-search").addEventListener("click", ocultar_buscador);
document.getElementById("navbar-toggler-ocultar-buscador").addEventListener("click", ocultar_buscador);

//Declarando variables
let bars_search =       document.getElementById("ctn-bars-search");
let principal =  document.getElementById("principal");
let inputSearch =       document.getElementById("inputSearch");
let box_search =        document.getElementById("box-search");

function cargarMonicionesBuscador(){
    fetch(`http://localhost:7000/api/moniciones/`, {method: 'GET'})
        .then(respuesta => {return respuesta.json()})//indicamos el formato en que se desea obtener la informacion
        .then(monicion => {
            let monicionAMostrar = document.querySelector('#box-search');
            //console.log(monicion);
            monicion.forEach(monicion => {
                const row = document.createElement("li");
                row.innerHTML += `
                    <a href="/moniciones/${monicion.id}?titulo=${monicion.titulo}&dia=${monicion.dia}&semana=${monicion.semana}&ciclo=${monicion.ciclo}&tiempo=${monicion.tiempo}" target="_blank"><i class="fas fa-search"></i>${monicion.titulo} ${monicion.dia} ${monicion.semana} - Tiempo ${monicion.tiempo} - Ciclo ${monicion.ciclo} <i class="fas fa-angle-double-right"></i></a>
                `;
                monicionAMostrar.appendChild(row);
                })
            })
        .catch(error => console.log("Hubo un Error: " + error.message))
}

cargarMonicionesBuscador();

//Funcion para mostrar el buscador
function mostrar_buscador(){

    inputSearch.focus();

    if (inputSearch.value === ""){
    box_search.style.display = "none";
    }
}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    inputSearch.value = "";
    box_search.style.display = "none";
}

//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
            box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }
    }
}

//===================================COOKIES===================================//
//Mensaje de COOKIES
let cookies = () => {
    //======================================================================
    // COOKIES
    //======================================================================

    //-----------------------------------------------------
    // Configuración
    //-----------------------------------------------------
    const urlsScriptsCookies = ['https://analytics.google.com', 'https://facebook.com'];

    function contenidoScriptsCookies () {
        ////////////  ¿Google Analítics? /////////////
        ////////////  ¿Facebook Pixel? /////////////
        ////////////  ¿Admob? /////////////
        ////////////  etc  /////////////
    }
    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    const seccionCookie = document.querySelector('section.cookies');
    const cookieSi = document.querySelector('.cookies__boton--si');
    const cookieNo = document.querySelector('.cookies__boton--no');
    const nuevosScripts = document.querySelector('#nuevosScripts');

    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------

    /**
      * Método que oculta la sección de Cookie para siempre
      */
    function ocultarCookie() {
        // Borra la sección de cookies en el HTML
        seccionCookie.remove();
    }

    /**
      * Método que marca las cookies como aceptadas
      */
    function aceptarCookies() {
        // Oculta el HTML de cookies
        ocultarCookie();
        // Guarda que ha aceptado
        localStorage.setItem('cookie', true);
        // Tu codigo a ejecutar si aceptan las cookies
        ejecutarSiAcepta();
    }

    /**
      * Método que marca las cookies como denegadas
      */
    function denegarCookies() {
        // Oculta el HTML de cookies
        ocultarCookie();
        // Guarda que ha aceptado
        localStorage.setItem('cookie', false);
    }

    /**
      * Método que ejecuta tu código si aceptan las cookies
      */
    function ejecutarSiAcepta() {
        // Crea los <script>
        urlsScriptsCookies.forEach((url) => {
            const nuevoScript = document.createElement('script');
            nuevoScript.setAttribute('src', url);
            nuevosScripts.appendChild(nuevoScript);
        });
        // Lanza los códigos
        contenidoScriptsCookies();
    }

    /**
      * Método que inicia la lógica
      */
    function iniciar() {
        // Comprueba si en el pasado el usuario ha marcado una opción
        if (localStorage.getItem('cookie') !== null) {
            if(localStorage.getItem('cookie') === 'true') {
                // Aceptó
                aceptarCookies();
            } else {
                // No aceptó
                denegarCookies();
            }
        }
    }

    //-----------------------------------------------------
    // Eventos
    //-----------------------------------------------------
    cookieSi.addEventListener('click',aceptarCookies, false);
    cookieNo.addEventListener('click',denegarCookies, false);

    return {
        iniciar: iniciar
    }
}
    
// Activa el código. Comenta si quieres desactivarlo.
cookies().iniciar();
    

