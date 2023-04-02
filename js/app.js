document.querySelector('.bars__menu').addEventListener('click', animateBars);
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
   
}

document.getElementById("btn__menu").addEventListener("click", function(){

    document.getElementById("nav").classList.toggle("mostrar");
   
});

//ejecutando funciones

document.getElementById("icon-search").addEventListener("click", mostrarBuscador);
document.getElementById("sombra-ctn-search").addEventListener("click", ocultarBuscador);

//BUSCADOR DE CONTENIDO-----------------------------------------------

var search=  document.getElementById("ctn-bars-search");
var sombra=  document.getElementById("sombra-ctn-search");
var inputSearch=  document.getElementById("inputSearch");
var box_search=  document.getElementById("box-search");

//funcion mostrar buscador

function mostrarBuscador(){
   search.style.top="135px";
   sombra.style.display="block";
   inputSearch.focus();

}

//ocultar buscador--------------

function ocultarBuscador(){
    search.style.top="0px";
    sombra.style.display="none";
    inputSearch.value="";
}

