// Función para validar el RUT chileno
function validarRut(rut) {
    const regex = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/;
    if (!regex.test(rut)) return false;

    rut = rut.replace(/\./g, "").toUpperCase();
    const digitoVerificador = rut.slice(-1);
    const numeros = rut.slice(0, -1).replace(/\D/g, "");
    let sum = 0;
    let factor = 2;

    for (let i = numeros.length - 1; i >= 0; i--) {
        sum += parseInt(numeros.charAt(i)) * factor;
        factor = factor === 7 ? 2 : factor + 1;
    }

    const mod = sum % 11;
    const dvCalculado = mod === 1 ? "K" : mod === 0 ? "0" : (11 - mod).toString();

    return dvCalculado === digitoVerificador;
    }

     // Función para validar el formato de correo electrónico 
    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
        return regex.test(email);
    }

$(document).ready(function () {
    // Cuando se haga clic en el botón de envío del formulario
    $(".submit-btn").click(function (event) {
        event.preventDefault();
        var isValid = true;

        // Validar el campo de RUT
        var rutVal = $('#rut').val().trim();
        if (!validarRut(rutVal)) {
            isValid = false;
            $('#rut').addClass('error');
            alert("Rut mal ingresado");
            return false;
        } else {
            $('#rut').removeClass('error');
        }

       // Validar el campo de Email
        var emailVal = $('#email').val().trim();
        if (emailVal === '' || !validarEmail(emailVal)) {
            isValid = false;
            $('#email').addClass('error');
            alert("Formato de email mal escrito");
        } else {
            $('#email').removeClass('error');
        }

          // Validar el campo de Nombre
        var nombreVal = $('#nombre').val().trim();
        if (nombreVal === '' || nombreVal.length <= 5) {
            isValid = false;
            $('#nombre').addClass('error');
        } else {
            $('#nombre').removeClass('error');
        }

        // Validar el campo de Alias
        var aliasVal = $('#alias').val().trim();
        if (aliasVal === '' || aliasVal.length < 5) {
            isValid = false;
            $('#alias').addClass('error');
        } else {
            $('#alias').removeClass('error');
        }

        // Validar el campo de Región
        var regionVal = $('#region').val();
        if (regionVal === '' || regionVal === '0') {
            isValid = false;
            $('#region').addClass('error');
        } else {
            $('#region').removeClass('error');
        }

        // Validar el campo de Comuna
        var comunaVal = $('#comuna').val();
        if (comunaVal === '' || comunaVal === '0') {
            isValid = false;
            $('#comuna').addClass('error');
        } else {
            $('#comuna').removeClass('error');
        }

        // Validar el campo de Candidato
        var candidatoVal = $('#candidato').val();
        if (candidatoVal === '' || candidatoVal === '0') {
            isValid = false;
            $('#candidato').addClass('error');
        } else {
            $('#candidato').removeClass('error');
        }

       // Validar Checked y guardar
        var selectedFuentes = [];
        var isChecked = $('input[name="fuente"]:checked');

        if (isChecked.length < 2) {
            alert("Debes seleccionar al menos dos opciones de cómo llegaste a nosotros.");
            isValid = false;
        } else {
            isChecked.each(function () {
                selectedFuentes.push($(this).val());
            });
            isValid = true;
        } 

        $(document).ready(function () {
            // Validar el formulario al enviarlo
            $('.submit-btn').click(function (event) {   
                if (!validarCheck()) {
                    event.preventDefault(); // Evitar que el formulario se envíe si no pasa la validación
                }
            });
         });

        // Obtener el RUT ingresado
        var rutVal = $('#rut').val().trim();

        // Si todas las validaciones son exitosas, enviar los datos mediante AJAX
        if (isValid) {
            $.ajax({
                url: 'verificar_rut.php', // Archivo PHP que realiza la consulta
                type: 'POST',
                data: { rut: rutVal }, // Enviar el RUT al servidor
                success: function (response) {
                    if (response === 'existe') {
                        alert('Ya existe un voto asociado a este RUT');
                        location.reload(); // Recargar la página si el RUT ya existe
                    } else {
                        // Ejecutar el segundo AJAX solo si el RUT no existe en la base de datos
                        $.ajax({
                            url: 'set_voto.php',
                            type: 'POST',
                            data: {
                                nombre: nombreVal,
                                alias: aliasVal,
                                rut: rutVal,
                                email: emailVal,
                                region: regionVal,
                                comuna: comunaVal,
                                candidato: candidatoVal,
                                fuente: selectedFuentes
                            },
                            success: function (response) {
                                // Mostrar el alert con el mensaje "Voto ingresado"
                                alert("Voto ingresado");
                                // Recargar la página después de mostrar el alert
                                location.reload();
                            },
                            error: function (xhr, status, error) {
                                console.log('Error al enviar los datos: ' + error);
                            }
                        });
                    }
                },
                error: function (xhr, status, error) {
                    console.log('Error al enviar los datos: ' + error);
                }
            });
        }
    });
});



