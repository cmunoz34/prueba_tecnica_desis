<?php

// Verificar que la petición sea de tipo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Si la petición no es POST, mostrar una pantalla en blanco y terminar la ejecución del script
    die();
}

// Establecer la conexión a la base de datos
require 'includes/conexion.php';

// Obtener los datos del formulario
$vot_nombre = $_POST['nombre'];
$vot_alias = $_POST['alias'];
$vot_rut = $_POST['rut'];
$vot_nombre = $_POST['nombre'];
$vot_email = $_POST['email'];
$vot_region = $_POST['region'];
$vot_comuna = $_POST['comuna'];
$vot_candidato = $_POST['candidato'];
$vot_medio = $_POST['fuente'];
// Convertir el arreglo de fuentes a una cadena JSON
$vot_medio = json_encode($vot_medio);

// Crear la consulta SQL
$sql = "INSERT INTO votacion (vot_nombre, vot_alias, vot_rut, vot_email, vot_region, vot_comuna, vot_candidato, vot_medio, fk_candidato_id)
        VALUES ('$vot_nombre', '$vot_alias', '$vot_rut', '$vot_email', '$vot_region', '$vot_comuna', '$vot_candidato', '$vot_medio', '$vot_candidato')";

// Ejecutar la consulta
if (mysqli_query($conexion, $sql)) {
    echo "Datos insertados correctamente.";
} else {
    echo "Error al insertar los datos: " . mysqli_error($conexion) . " - " . mysqli_errno($conexion);
}
?>
