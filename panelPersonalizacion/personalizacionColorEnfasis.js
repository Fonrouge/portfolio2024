//Objetos a modificar color
const buttons = document.getElementsByClassName("Button");
const separadores = document.getElementsByClassName("SeparadorSeccion");
const captions = document.getElementsByClassName("caption");
const TStitulo = document.getElementsByClassName("TStitulo");
const TSborde = document.getElementsByClassName("TSindividual");
var fotoFondo = document.getElementById("foto");
var resaltadorTexto = document.getElementsByClassName("resaltadorTexto");
var botonesMenu = document.getElementsByClassName("btnHeader");

//Botones que van a ejecutar el cambio
const BotonesEnfasis = document.getElementsByClassName("enfasisBtn");
const listaColoresEnfasis = [colorEnfasis1, colorEnfasis2, colorEnfasis3, colorEnfasis4];


//Comienzo lógica
for (let i = 0; i < BotonesEnfasis.length; i++) {

    BotonesEnfasis[i].style.backgroundColor = listaColoresEnfasis[i];

    BotonesEnfasis[i].addEventListener("click", function () {
        ColorEnfasis(BotonesEnfasis[i].style.backgroundColor);
        enfasisPorDefecto = BotonesEnfasis[i].style.backgroundColor;
    })
}

function ColorEnfasis(enfasis) {
    DeseleccionarMaterias();

    for (let i = 0; i < buttons.length; i++)
        buttons[i].style.backgroundColor = enfasis;

    for (let i = 0; i < separadores.length; i++)
        separadores[i].style.backgroundColor = enfasis;

    for (let i = 0; i < captions.length; i++)
        captions[i].style.backgroundColor = enfasis;

    for (let i = 0; i < TStitulo.length; i++) {
        TStitulo[i].style.backgroundColor = enfasis;
        TSborde[i].style.borderColor = enfasis;
    }

    fotoFondo.style.backgroundColor = enfasis;

    for (let i = 0; i < resaltadorTexto.length; i++)
        resaltadorTexto[i].style.color = enfasis;


    for (let i = 0; i < botonesMenu.length; i++) {

        botonesMenu[i].style.color = "white";

        botonesMenu[i].addEventListener("mouseout", function () {
            botonesMenu[i].style.color = "white";
        })

        botonesMenu[i].addEventListener("mouseover", function () {
            botonesMenu[i].style.color = enfasis;
        })

    }

    
}


var materiaTitulo = document.getElementsByClassName("materiaTitulo"); //1: Pickeo títulos en array
var materiaDetalle = document.getElementsByClassName("materiaDetalles"); //2: Pickeo descripciones en array

for (let i = 0; i < materiaDetalle.length; i++) {

    materiaDetalle[i].style.display = "none"; //3: Convierto todas descs en invisibles

    materiaTitulo[i].addEventListener("click", function () { //4: Les añado un evento click a TODOS los títulos

        if (materiaDetalle[i].style.display === "block") { //5: Si estaba visible, lo hago invisible + Fondo transparente + Letra blanca = "Deseleccionado"
            materiaDetalle[i].style.display = "none";
            materiaTitulo[i].style.backgroundColor = "transparent";
            materiaTitulo[i].style.color = "white";
        }

        else { //6: Hago invisibles a todos los demás + Transparente + Blanco = Los deselecciono a todos
            DeseleccionarMaterias();

            materiaTitulo[i].style.backgroundColor = enfasisPorDefecto;  //7: Al seleccionado lo pinto de énfasis + letra negra y habilito la descripción
            materiaTitulo[i].style.color = "black";
            materiaDetalle[i].style.display = "block";
            materiaDetalle[i].style.color = enfasisPorDefecto;
        };
    })

    materiaTitulo[i].addEventListener("mouseout", function () { //8: Cuando el puntero abandona el título, Deselecciona a todos los botones EXCEPTO al que tenga la desc. habilitadaa

        if (materiaDetalle[i].style.display != "block") {
            materiaTitulo[i].style.backgroundColor = "transparent";
            materiaTitulo[i].style.color = "white";
        }
    })

    materiaTitulo[i].addEventListener("mouseover", function () {  //9: Por último y el más fácil, cuando paso por encima se pinta de Seleccionado.
        materiaTitulo[i].style.backgroundColor = enfasisPorDefecto;
        materiaTitulo[i].style.color = "black";
    });
}


//Para cerrar la materia desplegada al momento de hacer click en algún otro evento.
function DeseleccionarMaterias() {

    for (let i = 0; i < materiaDetalle.length; i++) {
        materiaDetalle[i].style.display = "none";
        materiaTitulo[i].style.backgroundColor = "transparent";
        materiaTitulo[i].style.color = "white";
    }
}


//Seteo por primera y única vez el color de fondo la primera vez que se cargue la página.
ColorEnfasis(enfasisPorDefecto);