//Importar libreria que necesito para crear el servidor
const express = require('express');
// instalarnos el cors
const cors = require('cors');
const mysql = require('mysql2/promise');

//Crear el servidor
const app = express(); //mi server
app.use(cors());
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_grupo4',
    password: 'tvHR5h6e$Rr4C4D',
    database: 'freedb_SkyReact',
  });
  connection.connect();
  return connection;
}

const port = 5001;
app.listen(port, () => {
  console.log(`Ha arrancado el servidor en http://localhost:${port}`);
});
app.get('/listproject', async (req, res) => {
  const conn = await getConnection();
  const queryproject = 'select * from project';

  const [result] = await conn.query(queryproject);
  conn.end();
  res.json({
    msj: 'Todo muy bien',
    data: result,
  });
});

//API

//Endpoints
//Metodo:
//GET: devolver datos
//POST: insertar datos
//PUT: actualiza
//DELETE: eliminar

// app.get('/api/adalabers', (request, response) => {
//   //BUSCAR LAS ADALABERS EN LA BASES DE DATOS
//   const adalabers = [{ nombre: 'Alba' }, { nombre: 'Barbara' }];
//   response.json(adalabers);
// });

// app.get('/api/profes', (request, response) => {
//   response.send('Hola profes');
// });

//Servidor estáticos: mostrar información de ficheros que no cambia
const staticServerPath = './web/dist/';
app.use(express.static(staticServerPath));
