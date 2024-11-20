var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'proyecto3',
    user: 'root',
    password: '1234abcd'
});

conexion.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión exitosa');
    }
});

app.get('/materiales', function(req, res) {
    conexion.query(
        `SELECT Materiales.id_material, Materiales.id_categoria, Materiales.nombre_material AS nombre, Materiales.precio_venta, Materiales.precio_compra, Materiales.inventario, Categorias.id_categoria, Categorias.nombre_categoria
        FROM Materiales 
        INNER JOIN Categorias ON Categorias.id_categoria = Materiales.id_categoria
        ORDER BY Materiales.id_material ASC`,
        function(error, results, fields) {
            if (error) {
                res.status(500).send('Error al realizar la consulta a la base de datos');
                return;
            }
            let tablaHTML = '<table class="table table-info table-striped table-hover">';
            tablaHTML += '<thead><tr><th>Nombre Material</th><th>Categoria</th><th>Precio Venta</th><th>Precio Compra</th><th>Inventario</th></tr></thead>';
            tablaHTML += '<tbody>';

            results.forEach(row => {
                tablaHTML += `<tr>
                    <td>${row.nombre}</td>
                    <td>${row.nombre_categoria}</td>
                    <td>${row.precio_venta}</td>
                    <td>${row.precio_compra}</td>
                    <td>${row.inventario}</td>               
                </tr>`;
            });

            tablaHTML += '</tbody></table>'; 
            res.send(`
                <html>
                    <head>
                        <title>Materiales</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">      
                        <link rel="stylesheet" href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" />
                        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                        <script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>
                    </head>
                    <body>
                        <div class="container mt-4">
                            <h1>Materiales</h1>   
                            ${tablaHTML}
                        </div>
                        <script>
                            $(document).ready(function() {
                                $('.table').DataTable({
                                    "language": {
                                        "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
                                    }
                                });
                            });
                        </script>
                    </body>
                </html>
            `);
        }
    );
});

app.listen(3000, function() {
    console.log('Servidor corriendo en http://localhost:3000/materiales');
});
