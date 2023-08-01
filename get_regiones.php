<?php
// Incluir el archivo de conexión
require 'includes/conexion.php';

// Crear la conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $nombreBD);

// Verificar si hubo un error en la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta para obtener los datos de la tabla "regiones"
$sql = "SELECT codigo, nombre FROM regiones";

// Ejecutar la consulta
$resultado = $conexion->query($sql);

// Verificar si la consulta se ejecutó correctamente
if (!$resultado) {
    die("Error en la consulta: " . $conexion->error);
}

// Crear un arreglo para guardar los datos de regiones
$regiones = array();

// Obtener los datos y guardarlos en el arreglo
while ($fila = $resultado->fetch_assoc()) {
    $regiones[] = $fila;
}

// Cerrar la conexión
$conexion->close();

// Enviar la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($regiones);
?>
