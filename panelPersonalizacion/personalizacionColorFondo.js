
//1. Capturo los botones en lista --> 2. Genero lista de colores con lo ya declarado en index.js --> 3. Establezco que en el evento Click llame a ColorFondo

var BotonesColores = document.getElementsByClassName("colorBtn");
let listaColorFondo = [color1, color2, color3, color4];

//Seteo por primera y única vez el color de fondo la primera vez que se cargue la página.
body.style.backgroundColor = colorPorDefecto;

for (let i = 0; i < BotonesColores.length; i++) {

    BotonesColores[i].style.backgroundColor = listaColorFondo[i];

    BotonesColores[i].addEventListener("click", function () {
        body.style.backgroundColor = listaColorFondo[i];
        body.style.backgroundBlendMode = "overlay";
    })
}

