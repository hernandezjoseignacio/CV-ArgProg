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

// ---Animaciones de las Barras de nivel de la seccion "Mis Habilidades"---
