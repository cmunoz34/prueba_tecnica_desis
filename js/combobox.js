$(document).ready(function () {
// Función para cargar las regiones desde el servidor
        function cargarRegiones() {
            $.ajax({
                url: 'get_regiones.php', // Ruta al archivo PHP que obtiene las regiones desde la base de datos
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // Limpiar el select de regiones
                    $('#region').empty();

                    // Agregar la opción inicial
                    $('#region').append('<option value="">Seleccione una región</option>');

                    // Agregar las opciones de regiones desde los datos obtenidos
                    $.each(data, function (index, region) {
                        $('#region').append('<option value="' + region.codigo + '">' + region.nombre + '</option>');
                    });
                },
                error: function (xhr, status, error) {
                    console.log('Error al cargar las regiones: ' + error);
                }
            });
        }


        // Función para cargar las comunas desde el servidor
        function cargarComunas(regionCodigo) {
            $('#comuna').hide();
            $.ajax({
                url: 'get_comunas.php', // Ruta al archivo PHP que obtiene las comunas desde la base de datos
                type: 'GET',
                dataType: 'json',
                data: { regionCodigo: regionCodigo }, // Enviar el código de la región seleccionada como parámetro
                success: function (comunas) {
                    // Limpiar el select de comunas
                    $('#comuna').empty();

                    // Agregar la opción inicial
                    $('#comuna').append('<option value="">Seleccione una comuna</option>');

                    // Agregar las opciones de comunas desde los datos obtenidos
                    $.each(comunas, function (index, comuna) {
                        $('#comuna').append('<option value="' + comuna.codigoInterno + '">' + comuna.nombre + '</option>');
                        $('#comuna').show();
                    });
                },
                error: function (xhr, status, error) {
                    console.log('Error al cargar las comunas: ' + error);
                }
            });
        }

        // Cargar las regiones al cargar la página
        $(document).ready(function () {
            cargarRegiones();

            // Cargar las comunas al seleccionar una región
            $('#region').change(function () {
                var regionCodigo = $(this).val();
                cargarComunas(regionCodigo);
            });
        });

         // Función para cargar los candidatos desde el servidor
            function cargarCandidatos() {
                $.ajax({
                    url: 'get_candidatos.php', // Ruta al archivo PHP que obtiene los candidatos desde la base de datos
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        // Limpiar el select de candidatos
                        $('#candidato').empty();

                        // Agregar la opción inicial
                        $('#candidato').append('<option value="">Seleccione un candidato</option>');

                        // Agregar las opciones de candidatos desde los datos obtenidos
                        $.each(data, function (index, candidato) {
                            $('#candidato').append('<option value="' + candidato.id + '">' + candidato.nombre + '</option>');
                        });
                    },
                    error: function (xhr, status, error) {
                        console.log('Error al cargar los candidatos: ' + error);
                    }
                });
            }

            // Cargar los candidatos al cargar la página
            cargarCandidatos();


});