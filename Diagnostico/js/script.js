document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // cuando se pone enviar sale formulario enviado en un alert
    alert('¡Formulario enviado!');
});
