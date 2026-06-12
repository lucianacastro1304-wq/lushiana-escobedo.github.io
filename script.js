// Capturar botones del menú
const btnAcerca = document.getElementById("btn-acerca");
const btnCv = document.getElementById("btn-cv");

// Capturar los bloques de contenido
const bloqueAcerca = document.getElementById("bloque-acerca");
const bloqueCv = document.getElementById("bloque-cv");

// Evento al dar clic en "Acerca de mí"
btnAcerca.addEventListener("click", function(e) {
    e.preventDefault();
    bloqueAcerca.classList.remove("oculto"); // Muestra
    bloqueCv.classList.add("oculto");        // Oculta
    
    btnAcerca.classList.add("activo");       // Resalta botón
    btnCv.classList.remove("activo");
});

// Evento al dar clic en "CV"
btnCv.addEventListener("click", function(e) {
    e.preventDefault();
    bloqueAcerca.classList.add("oculto");     // Oculta
    bloqueCv.classList.remove("oculto");    // Muestra
    
    btnCv.classList.add("activo");          // Resalta botón
    btnAcerca.classList.remove("activo");
});