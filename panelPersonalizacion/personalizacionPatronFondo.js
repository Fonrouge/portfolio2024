
//1. Capturo los botones en lista --> 2. Genero lista de imágenes(patrones) con lo ya declarado en index.js --> 3. Establezco que en el evento Click se aplique el fondo clickeado.

BotonesPatron = document.getElementsByClassName("patronBtn");
let listaPatrones = [patron1, patron2, patron3, patron4];

//Seteo por primera y única vez el patrón de fondo la primera vez que se cargue la página.
body.style.backgroundImage = patronPorDefecto;
body.style.backgroundBlendMode = "overlay";

for (let i = 0; i < BotonesPatron.length; i++) {

    BotonesPatron[i].style.backgroundImage = listaPatrones[i];
    BotonesPatron[i].style.backgroundSize = "9vw";

    BotonesPatron[i].addEventListener("click", function () {
        body.style.backgroundImage = listaPatrones[i];
        body.style.backgroundBlendMode = "overlay";
    })
}

