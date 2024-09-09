const express = require('express');
const mssql = require('mssql');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const config = {
  user: 'adminapps@proyectosapps',
  password: 'Colombia2024**',
  server: 'tcp:proyectosapps.database.windows.net,1433',
  database: 'safiro'
};

// Endpoint para obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    await mssql.connect(config);
    const result = await sql.query('SELECT * FROM wa_usuarios');
    res.json(result.recordsets);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los usuarios');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});