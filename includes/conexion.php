<?php
// Configuración de la conexión a la base de datos
$host = 'localhost';
$usuario = 'root';
$contrasena = '';
$nombreBD = 'test';

// Establecer la conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $nombreBD);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}
?>
