var botonDesplegar = document.getElementById("apertura");
var panelBotones = document.getElementById("PanelPersonalizacion");

panelBotones.style.left = "-14.5vw";
botonDesplegar.style.left = "0vw";

botonDesplegar.addEventListener("click", function () {

    DeseleccionarMaterias();

    if (panelBotones.style.left === "-14.5vw") {
        panelBotones.style.left = "0";
        botonDesplegar.style.left = "14.5vw"; // Ocultar el menú
        botonDesplegar.textContent = "◄";
    }
    else {
        panelBotones.style.left = "-14.5vw";
        botonDesplegar.style.left = "0vw"; // Mostrar el menú
        botonDesplegar.textContent = "►";
    }
});