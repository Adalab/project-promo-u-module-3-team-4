//Importar libreria que necesito para crear el servidor
const express = require('express');
// instalarnos el cors
const cors = require('cors');

//Crear el servidor
const app = express(); //mi server
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Ha arrancado el servidor en http://localhost:${port}`);
});

//API

//Endpoints
//Metodo:
//GET: devolver datos
//POST: insertar datos
//PUT: actualiza
//DELETE: eliminar

app.get('/api/adalabers', (request, response) => {
  //BUSCAR LAS ADALABERS EN LA BASES DE DATOS
  const adalabers = [{ nombre: 'Alba' }, { nombre: 'Barbara' }];
  response.json(adalabers);
});

app.get('/api/profes', (request, response) => {
  response.send('Hola profes');
});

//Servidor estáticos: mostrar información de ficheros que no cambia
const staticServerPath = './web';
app.use(express.static(staticServerPath));
