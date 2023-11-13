import { useState } from 'react';
import storage from '../services/localStorage';
import objectApi from '../services/api';
import '../styles/App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Landing from './Landing';
import Project from './Project';
import '../styles/core/mixin.scss';
import '../styles/core/variables.scss';
import { Routes, Route } from 'react-router-dom';
import '../styles/layout/hero.scss';
import ButtonLink from './ButtonLink';

function App() {
  const [data, setData] = useState(
    storage.get('infoFormLS', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      description: '',
      technologies: '',
      job: '',
      autor: '',
      image: '',
      photo: '',
    })
  );

  const [errorName, setErrorName] = useState('');
  const [errorSlogan, setErrorSlogan] = useState('');
  const [errorDesc, setErrorDesc] = useState('');
  const [errorTechnologies, setErrorTechnologies] = useState('');
  const [errorJob, setErrorJob] = useState('');
  const [errorAutor, setErrorAutor] = useState('');
  const [errorRepo, setErrorRepo] = useState('');
  const [errorDemo, setErrorDemo] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [nightMode, setNightMode] = useState(false);

  const updateImgProfile = (imgProfile) => {
    setData({ ...data, image: imgProfile });
    storage.set('infoFormLS', { ...data, image: imgProfile });
  };

  const updateImgProject = (imgProject) => {
    setData({ ...data, photo: imgProject });
    storage.set('infoFormLS', { ...data, photo: imgProject });
  };

  const handleInput = (value) => {
    setData(value);
    storage.set('infoFormLS', value);
    if (data.name !== '') {
      setErrorName('');
    }
    if (data.slogan !== '') {
      setErrorSlogan('');
    }
    if (data.technologies !== '') {
      setErrorTechnologies('');
    }
    if (data.description !== '') {
      setErrorDesc('');
    }
    if (data.autor !== '') {
      setErrorAutor('');
    }
    if (data.job !== '') {
      setErrorJob('');
    }
    if (data.repo !== '') {
      setErrorRepo('');
    }
    if (data.demo !== '') {
      setErrorDemo('');
    }
  };

  const handleReset = (value) => {
    setData(value);
    storage.clear();
  };

  const handleMode = (value) => {
    setNightMode(value);
  };

  const handleCreateProject = () => {
    let hasError = false;

    const allowedCharacters = /^[a-zA-Z0-9\s'"\-\/ñáéíóúÁÉÍÓÚ:/.?=&,;?!()]+$/;
    const fieldsToCheck = [
      { field: data.name, setError: setErrorName },
      { field: data.slogan, setError: setErrorSlogan },
      { field: data.technologies, setError: setErrorTechnologies },
      { field: data.description, setError: setErrorDesc },
      { field: data.autor, setError: setErrorAutor },
      { field: data.job, setError: setErrorJob },
      { field: data.repo, setError: setErrorRepo },
      { field: data.demo, setError: setErrorDemo },
    ];
    fieldsToCheck.map(({ field, setError }) => {
      setError(
        !field || !field.match(allowedCharacters) ? 'Campo Obligatorio' : ''
      );
      if (!field || !field.match(allowedCharacters)) {
        hasError = true;
      }
    });

    if (!hasError) {
      objectApi
        .callToApi(data)
        .then((response) => {
          setPreviewUrl(response);
          setSuccessMessage('La tarjeta ha sido creada:');
          setErrorMessage('');
        })
        .catch((error) => {
          setErrorMessage('Error al crear la tarjeta.');
          setSuccessMessage('');
        });
    } else {
      setPreviewUrl('');
      setSuccessMessage('');
      setErrorMessage('');
    }
  };

  //html
  return (
    <>
      <div className={nightMode ? 'containerN' : 'containerDay'}>
        <Header nightMode={nightMode} handleMode={handleMode} />

        <Routes>
          <Route
            path="/"
            element={<Landing data={data} nightMode={nightMode} />}
          />
          <Route
            path="/create"
            element={
              <main className="main">
                <Hero nightMode={nightMode} />
                <ButtonLink
                  className="hero__button"
                  text="Ver proyectos"
                  root=""
                />
                <Project
                  data={data}
                  errorName={errorName}
                  errorSlogan={errorSlogan}
                  errorDesc={errorDesc}
                  errorTechnologies={errorTechnologies}
                  errorJob={errorJob}
                  errorAutor={errorAutor}
                  errorRepo={errorRepo}
                  errorDemo={errorDemo}
                  previewUrl={previewUrl}
                  successMessage={successMessage}
                  errorMessage={errorMessage}
                  handleInput={handleInput}
                  handleCreateProject={handleCreateProject}
                  updateImgProfile={updateImgProfile}
                  updateImgProject={updateImgProject}
                  handleReset={handleReset}
                  nightMode={nightMode}
                />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
