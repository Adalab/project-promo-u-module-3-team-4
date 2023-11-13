const express = require('express');
// instalarnos el cors
const cors = require('cors');
const mysql = require('mysql2/promise');
//Crear el servidor
const app = express(); //mi server
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.json({ limit: '25mb' }));
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
app.post('/createproject', async (req, res) => {
  const body = req.body;
  console.log(body);
  const insertAutor = 'INSERT INTO autor (autor, job, image) values (?, ?, ?);';
  const insertProject =
    'INSERT INTO project (name, slogan, technologies, repo, demo, description, photo, fk_autor) values (?, ?, ?, ?, ?, ?, ?, ?)';
  const conn = await getConnection();
  const [resultAutor] = await conn.query(insertAutor, [
    body.autor,
    body.job,
    body.image,
  ]);
  const [resultProject] = await conn.query(insertProject, [
    body.name,
    body.slogan,
    body.technologies,
    body.repo,
    body.demo,
    body.description,
    body.photo,
    resultAutor.insertId,
  ]);
  res.json({
    success: true,
    previewUrl:
      'https://sky-react.onrender.com/project/' + resultProject.insertId,
  });
});
app.get('/project/:idproject', async (req, res) => {
  const id = req.params.idproject;

  const selectProject = `
  SELECT project.*, autor.autor, autor.job, autor.image
  FROM project
  INNER JOIN autor ON project.fk_autor = autor.idAutor
  WHERE project.idProject=?
`;
  const conn = await getConnection();
  const [results] = await conn.query(selectProject, [id]);
  if (results.length === 0) {
    res.status(404).render('notFound');
  } else {
    res.render('detailProject', { project: results[0] });
  }
});

app.delete('/project/:idproject', async (req, res) => {
  const id = req.params.idproject;
  const conn = await getConnection();

  try {
    const deleteProjectQuery = 'DELETE FROM project WHERE idProject=?';
    await conn.query(deleteProjectQuery, [id]);

    const deleteAutorQuery = 'DELETE FROM autor WHERE idAutor=?';
    await conn.query(deleteAutorQuery, [id]);

    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting project' });
  } finally {
    conn.end();
  }
});

//API
//Servidor estáticos: mostrar información de ficheros que no cambia
const staticServerPath = './src/public-react';
app.use(express.static(staticServerPath));
app.use(express.static('public'));
