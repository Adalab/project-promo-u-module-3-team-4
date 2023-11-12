import Card from './project/card_preview/Card';
import SectionPreview from './project/card_preview/SectionPreview';
import Profile from './project/card_preview/Profile';
import Imagen from '../images/projectday.jpg';
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
              <a
                className="section-landing__click"
                key={project.idProject}
                href={`https://sky-react.onrender.com/project/${project.idProject}`}
                target="_blank"
              >
                <Card
                  data={project}
                  classLanding="preview__autor__landing"
                  key={project.idProject}
                />
              </a>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Landing;
