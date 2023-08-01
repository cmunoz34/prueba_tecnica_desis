$(document).ready(function () {
    $('.submit-btn').click(function (event) {
        event.preventDefault();
        var isValid = true;

        // Resto del código de validación...

        // Obtener el RUT ingresado
        var rutVal = $('#rut').val().trim();

        // Validar el formato del RUT aquí (puedes usar la función validarRut)

        // Si todas las validaciones son exitosas, enviar los datos mediante AJAX
        if (isValid) {
            $.ajax({
                url: 'verificar_rut.php', // Archivo PHP que realiza la consulta
                type: 'POST',
                data: { rut: rutVal }, // Enviar el RUT al servidor
                success: function (response) {
                    if (response === 'existe') {
                        alert('El RUT ya existe en la base de datos.');
                        return false;
                    } else {
                        // Aquí puedes realizar la inserción o cualquier otra acción que desees
                        alert('Voto Ingresado');
                        location.reload(); // Recargar la página después de la inserción
                    }
                },
                error: function (xhr, status, error) {
                    console.log('Error al enviar los datos: ' + error);
                }
            });
        }
    });
});
