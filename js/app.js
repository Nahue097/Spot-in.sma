
//icono menu hamburguesa-------------
document.querySelector('.bars__menu').addEventListener('click', animateBars);
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
   
}

//mostrar menu con evento click------------------------------
const botonMenu = document.querySelector(".bars__menu");
const navMenu = document.querySelector(".nav_menu");

  botonMenu.addEventListener("click", ()=>{
    navMenu.classList.toggle("mostrar_menu");
  })

 


//ocultar menu responsive cuando selecciono algo del menu

var ocultarConMenu = document.querySelectorAll('.nav_menu a[href^="#"]');

ocultarConMenu.forEach(ocultarMenu => {
  ocultarMenu.addEventListener("click", function(){
    navMenu.classList.remove("mostrar_menu");
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
   
  })
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
 
   if(inputSearch.value===""){
    box_search.style.display="none"
}

}

//ocultar buscador--------------

function ocultarBuscador(){
    search.style.top="0px";
    sombra.style.display="none";
    inputSearch.value="";
    box_search.style.display="none";
}





//----------------- buscador internerno---------------------------------
//filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscadorInterno);

 function buscadorInterno(){

    filtro= inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //recorriendo elementos a filtrar 
    
    for(i=0; i < li.length; i++){
         a = li[i].getElementsByTagName("a")[0];
         textValue=a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filtro)>-1){

            li[i].style.display="";
            box_search.style.display="block";

            if(inputSearch.value===""){
                box_search.style.display="none"
            }

        }else{
            li[i].style.display="none";
        }     
    }

    

}
 


//-------------------- CAROUSEL CASAS---------------------------------------
window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.ctn-tarjetas-casas'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel_indicadores-casas',
        arrows: {
          prev: '.carousel_anterior-casas',
          next: '.carousel_siguiente-casas'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 400,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
            
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 720,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
               
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                 
                }
              }
          ]
    });


    
});

//------------------------------CAROUSEL DEPARTAMENTOS-----------------

window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.ctn-tarjetas-departamentos'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel_indicadores-dep',
        arrows: {
          prev: '.carousel_anterior-dep',
          next: '.carousel_siguiente-dep'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 400,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 2,
                  slidesToScroll: 2,
              
                }
              },{
                // screens greater than >= 1024px
                breakpoint: 720,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                 
                }
              },{
                  // screens greater than >= 1024px
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                   
                  }
                }
          ]
    });


    
});

//--------------------------CAROUSEL CABAÑAS---------------------------

window.addEventListener('load', function(){
  new Glider(this.document.querySelector('.ctn-tarjetas-cabañas'),{
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.carousel_indicadores-cabañas',
      arrows: {
        prev: '.carousel_anterior-cabañas',
        next: '.carousel_siguiente-cabañas'
      },
      responsive: [
          {
              // screens greater than >= 775px
              breakpoint: 400,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
            
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 720,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
               
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                 
                }
              }
        ]
  });


  
});

//---------------------------- TARJETAS HABITACIONES----------------------

window.addEventListener('load', function(){
  new Glider(this.document.querySelector('.ctn-tarjetas-habit'),{
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.carousel_indicadores-habit',
      arrows: {
        prev: '.carousel_anterior-habit',
        next: '.carousel_siguiente-habit'
      },
      responsive: [
          {
              // screens greater than >= 775px
              breakpoint: 400,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
            
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 720,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
               
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                 
                }
              }
        ]
  });


  
});

