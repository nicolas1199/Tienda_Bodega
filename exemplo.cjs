var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();
app.use(express.urlencoded({ extended: true }));

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
            tablaHTML += '<thead><tr><th>Nombre Material</th><th>Categoria</th><th>Precio Venta</th><th>Precio Compra</th><th>Inventario</th><th>Opciones</th></tr></thead>';
            tablaHTML += '<tbody>';

            results.forEach(row => {
                tablaHTML += `<tr>
                    <td>${row.nombre}</td>
                    <td>${row.nombre_categoria}</td>
                    <td>${row.precio_venta}</td>
                    <td>${row.precio_compra}</td>
                    <td>${row.inventario}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Opciones">
                            <!-- Ver Material -->
                            <form action="/verMaterial" method="get">
                                <input type="hidden" name="material" value="${row.id_material}">
                                <input type="submit" value="Ver" class="btn btn-primary" style="margin-right: 10px;">
                            </form>
                            <!-- Modificar Material -->
                            <form action="/modificarMaterial" method="get">
                                <input type="hidden" name="material" value="${row.id_material}">
                                <input type="submit" value="Actualizar" class="btn btn-primary" style="margin-right: 10px;">
                            </form>
                            <!-- Eliminar Material -->
                            <form action="/eliminarMaterial" method="post" onsubmit="return confirm('¿Estás seguro de que deseas eliminar este material?');">
                                <input type="hidden" name="material" value="${row.id_material}">
                                <input type="submit" value="Eliminar" class="btn btn-danger" style="margin-right: 10px;">
                            </form>
                        </div>
                    </td>
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
                                    },
                                    "paging": true,  // Habilitar paginación
                                    "searching": true,  // Habilitar búsqueda
                                    "ordering": true,  // Habilitar ordenación
                                    "info": true,  // Mostrar información
                               });
                            });

                        </script>
                    </body>
                </html>
            `);
        }
    );
});

app.get('/verMaterial', function(req, res) {
    const id_material = req.query.material;
    // Consulta para obtener información del material
    conexion.query(
        `SELECT * FROM Materiales WHERE id_material = ?`, [id_material],
        function(error, results, fields) {
            if (error) {
                res.status(500).send('Error al obtener el material');
                return;
            }
            // Aquí puedes renderizar la vista con los detalles del material
            res.send(`
                <html>
                    <head>
                        <title>Ver Material</title>
                    </head>
                    <body>
                        <h1>Detalles del Material</h1>
                        <p>Nombre: ${results[0].nombre_material}</p>
                        <p>Categoría: ${results[0].id_categoria}</p>
                        <p>Precio de Venta: ${results[0].precio_venta}</p>
                        <p>Precio de Compra: ${results[0].precio_compra}</p>
                        <p>Inventario: ${results[0].inventario}</p>
                    </body>
                </html>
            `);
        }
    );
});

app.get('/modificarMaterial', function(req, res) {
    const id_material = req.query.material;
    // Consulta para obtener la información del material
    conexion.query(
        `SELECT * FROM Materiales WHERE id_material = ?`, [id_material],
        function(error, results, fields) {
            if (error) {
                res.status(500).send('Error al obtener el material');
                return;
            }
            // Aquí puedes renderizar un formulario para modificar el material
            res.send(`
                <html>
                    <head>
                        <title>Modificar Material</title>
                    </head>
                    <body>
                        <h1>Modificar Material</h1>
                        <form action="/guardarModificacion" method="post">
                            <input type="hidden" name="id_material" value="${results[0].id_material}">
                            <label>Nombre:</label><input type="text" name="nombre" value="${results[0].nombre_material}">
                            <label>Precio Venta:</label><input type="text" name="precio_venta" value="${results[0].precio_venta}">
                            <label>Precio Compra:</label><input type="text" name="precio_compra" value="${results[0].precio_compra}">
                            <label>Inventario:</label><input type="number" name="inventario" value="${results[0].inventario}">
                            <input type="submit" value="Guardar Cambios">
                        </form>
                    </body>
                </html>
            `);
        }
    );
});

app.post('/guardarModificacion', function (req, res) {
    const { id_material, nombre, precio_venta, precio_compra, inventario } = req.body;

    // Validación básica de los datos enviados
    if (!id_material || !nombre || !precio_venta || !precio_compra || !inventario) {
        res.status(400).send('Faltan datos obligatorios.');
        return;
    }

    // Consulta para actualizar los datos del material
    const query = `
        UPDATE Materiales
        SET nombre_material = ?, precio_venta = ?, precio_compra = ?, inventario = ?
        WHERE id_material = ?
    `;
    const valores = [nombre, precio_venta, precio_compra, inventario, id_material];

    conexion.query(query, valores, function (error, results) {
        if (error) {
            console.error('Error al actualizar el material:', error);
            res.status(500).send('Hubo un error al actualizar el material.');
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).send('No se encontró el material para actualizar.');
            return;
        }

        // Redirige a la lista de materiales tras la actualización
        res.send(`
            <html>
                <head>
                    <title>Actualización Exitosa</title>
                </head>
                <body>
                    <h1>El material se actualizó correctamente</h1>
                    <a href="/materiales">Volver a la lista de materiales</a>
                </body>
            </html>
        `);
    });
});

app.post('/eliminarMaterial', function(req, res) {
    const id_material = req.body.material;
    // Consulta para eliminar el material
    conexion.query(
        `DELETE FROM Materiales WHERE id_material = ?`, [id_material],
        function(error, results, fields) {
            if (error) {
                res.status(500).send('Error al eliminar el material');
                return;
            }
            res.send('Material eliminado correctamente');
        }
    );
});

app.listen(3000, function() {
    console.log('Servidor corriendo en http://localhost:3000/materiales');
});
