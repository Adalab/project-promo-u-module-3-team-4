//Importar libreria que necesito para crear el servidor
const express = require('express');
// instalarnos el cors
const cors = require('cors');
const mysql = require('mysql2/promise');

//Crear el servidor
const app = express(); //mi server
app.use(cors());
app.use(express.json({ limit: "25mb" }));
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
  // const queryproject = 'SELECT * FROM project';
  const queryproject = `
  SELECT project.*, autor.autor, autor.job, autor.image
  FROM project
  LEFT JOIN autor ON project.fk_autor = autor.idAutor
`;

  const [result] = await conn.query(queryproject);

  conn.end();
  res.json({
    msj: 'Todo muy bien',
    data: result,
  });
});

app.post('/createproject', async (req ,res) => {
  const body = req.body;
  console.log(body);
  const insertAutor = 'INSERT INTO autor (autor, job, image) values (?, ?, ?);';
  const insertProject = 'INSERT INTO project (name, slogan, technologies, repo, demo, description, photo, fk_autor) values (?, ?, ?, ?, ?, ?, ?, ?)';
  const conn = await getConnection();
  const [resultAutor] = await conn.query(insertAutor, [body.autor, body.job, body.image]);
  const [resultProject] = await conn.query(insertProject, [body.name, body.slogan, body.technologies, body.repo, body.demo, body.description, body.photo, resultAutor.insertId]);
  res.json ({
    success: true,
    cardUrl: 'http://localhost:5001/project/' + resultProject.insertId,
  });
});

//API

//Servidor estáticos: mostrar información de ficheros que no cambia
const staticServerPath = './web/dist/';
app.use(express.static(staticServerPath));
