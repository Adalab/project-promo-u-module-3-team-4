import Card from './project/card_preview/Card';
import '../styles/layout/Landing.scss';
import Hero from './hero/Hero';
import '../styles/layout/hero.scss';
import ButtonLink from './ButtonLink';
import api from '../services/api';
import { useEffect, useState } from 'react';

const Landing = ({ nightMode }) => {
  const [listProject, setListProject] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDataProjects();
      setListProject(data.data);
    };
    fetchData();
  }, []);

  const handleDeleteProject = async (projectId) => {
    try {
      const message = await api.deleteProject(projectId);
      console.log(message); // Registra el mensaje de éxito si es necesario
      // Ahora, actualiza el estado para reflejar los cambios (eliminar el proyecto eliminado)
      setListProject((proyectosPrevios) =>
        proyectosPrevios.filter((proyecto) => proyecto.idProject !== projectId)
      );
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
      // Maneja el error, muestra un mensaje al usuario, etc.
    }
  };

  return (
    <div className="container-landing">
      <main className="main-landing">
        <Hero nightMode={nightMode} />
        <ButtonLink
          className="hero__button"
          text="Crea tu proyecto"
          root="create"
        />
        <section className="section-landing">
          {listProject.map((project) => {
            return (
              <div className="landing-div" key={project.idProject}>
                <a
                  className="section-landing__click"
                  href={`https://sky-react.onrender.com/project/${project.idProject}`}
                  target="_blank"
                >
                  <Card
                    data={project}
                    classLanding="preview__autor__landing"
                    nightMode={nightMode}
                  />
                </a>
                <button
                  className="landing-delete__button"
                  onClick={() => handleDeleteProject(project.idProject)}
                >
                  <i class="lan-del-icon fa-regular fa-trash-can"></i>
                  <span className="lan-del-text">Eliminar Proyecto</span>
                  <i class="lan-del-icon fa-regular fa-hand-point-up"></i>
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Landing;
