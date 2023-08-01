<?php
// Establecer la conexión a la base de datos
require 'includes/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['rut'])) {
    // Obtener el RUT del formulario
    $vot_rut = $_POST['rut'];

    // Consultar si el RUT ya existe en la base de datos
    $sql_verificar_rut = "SELECT * FROM votacion WHERE vot_rut = '$vot_rut'";
    $resultado = mysqli_query($conexion, $sql_verificar_rut);

    if (mysqli_num_rows($resultado) > 0) {
        // Si el RUT ya existe, devolver 'existe' al cliente
        echo 'existe';
    } else {
        // Si el RUT no existe, devolver 'no_existe' al cliente
        echo 'no_existe';
    }
}
?>
