<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Registro</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/validaciones.js"></script>
    <script src="js/combobox.js"></script>

</head>
<body>
    <div class="form-container">
         <div class="logo">
            <img src="img/logo-desis.png" alt="Logo Desis">
         </div>
        <div class="form-group">
            <label for="nombre">Nombre y Apellido:</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>


        <div class="form-group">
            <label for="alias">Alias:</label>
            <input type="text" id="alias" name="alias" required>
        </div>

        <div class="form-group">
            <label for="rut">RUT:</label>
            <input type="text" id="rut" name="rut" required>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>

       <div class="form-group">
        <label for="region">Región:</label>
        <select id="region" name="region" required>
            <option value="0">Seleccione una región</option>
        </select>
      </div>

   <div class="form-group">
        <label for="comuna">Comunas:</label>
        <select id="comuna" name="comuna" required>
            <option value="0">Seleccione una comuna</option>
        </select>
      </div>

 <div class="form-group">
        <label for="candidato">Candidato:</label>
        <select id="candidato" name="candidato" required>
            <option value="0">Seleccione un candidato</option>
        </select>
      </div>


       <div class="form-group">
            <label>¿Cómo se enteró de nosotros?</label>
            <div class="checkbox-group">
                <label>
                    <input type="checkbox" name="fuente" value="web">Web
                </label>
                <label>
                    <input type="checkbox" name="fuente" value="tx">TV
                </label>
                <label>
                    <input type="checkbox" name="fuente" value="rrss">RRSS
                </label>
                <label>
                    <input type="checkbox" name="fuente" value="amigo">Amigo
                </label>
            </div>
        </div>

        <button type="submit" class="submit-btn">Enviar</button>
    </div>
</body>
</html>