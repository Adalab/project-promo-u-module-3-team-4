import { useState } from 'react';
import storage from '../services/localStorage';
import callToApi from '../services/api';
import '../styles/App.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import SectionPreview from './project/card_preview/SectionPreview';
import Form from './project/form/Form';
import Hero from './hero/Hero';
import '../styles/core/mixin.scss';
import '../styles/core/variables.scss';

function App() {
  const [data, setData] = useState(
    storage.get('infoFormLS', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      desc: '',
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
  };

  const handleCreateProject = () => {
    let hasError = false;

    const allowedCharacters = /^[a-zA-Z0-9\s'"\-\/]+$/;
    const fieldsToCheck = [
      { field: data.name, setError: setErrorName },
      { field: data.slogan, setError: setErrorSlogan },
      { field: data.technologies, setError: setErrorTechnologies },
      { field: data.desc, setError: setErrorDesc },
      { field: data.autor, setError: setErrorAutor },
      { field: data.job, setError: setErrorJob },
      { field: data.repo, setError: setErrorRepo },
      { field: data.demo, setError: setErrorDemo },
    ];
    fieldsToCheck.map(({ field, setError }) => {
      setError(
        !field || !field.match(allowedCharacters) ? 'Campo Obligatorio' : ''
      );
    });

    if (!hasError) {
      callToApi(data)
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
      <div className="container">
        <Header />

        <main className="main">
          <Hero />

          <section className="section">
            <SectionPreview data={data} />

            <Form
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
            />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
