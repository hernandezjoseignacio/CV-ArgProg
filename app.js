// ---Menu Lateral---
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){ //Si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

// ---El menu debe ocultarse una vez se seleccione una opcion---
let links = document.querySelectorAll("nav a");
for(var x = 0; x<links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// ---Animaciones de las Barras de Nivel de la seccion "Mis Habilidades"---
function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className="e";
        id_barra.appendChild(div);
    }
}

// ---Selecciono todas las Barras de Nivel para luego manipularlas---
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

// ---Construyo la logica para que las barritas se carguen solo hasta los niveles que poseen---
let contadores = [-1,-1,-1,-1,-1,-1]; // ---Comienza en -1 porque las barritas no tienen nada al comienzo---
let entro = false; // ---Bandera que me indica si ya se ejecutó la animacion---
function efectoHabilidades(){ // ---Esta funcion sirve para aplicar las animaciones a las Barritas de Nivel---
    var habilidaes = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidaes.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        }, 100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        }, 100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        }, 100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 4, intervalPhp);
        }, 100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x<cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#39ff14";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}



