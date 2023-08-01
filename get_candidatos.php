<?php
// Incluir el archivo de conexión
require 'includes/conexion.php';

// Crear la conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $nombreBD);

// Verificar si hubo un error en la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta para obtener las comunas de la región seleccionada
$sql = "SELECT id, nombre FROM candidatos";

// Ejecutar la consulta
$resultado = $conexion->query($sql);

// Verificar si la consulta se ejecutó correctamente
if (!$resultado) {
    die("Error en la consulta: " . $conexion->error);
}

// Crear un arreglo para guardar los datos de candidatos
$candidatos = array();

// Obtener los datos y guardarlos en el arreglo
while ($fila = $resultado->fetch_assoc()) {
    $candidatos[] = $fila;
}

// Cerrar la conexión
$conexion->close();

// Enviar la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($candidatos);
?>
