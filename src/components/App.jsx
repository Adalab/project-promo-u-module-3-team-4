import { useState, useEffect } from 'react';
// import storage from "../services/localStorage";
import callToApi from '../services/api';
import '../styles/App.scss'

import cover from '../images/covercut.jpg'
import logo from '../images/logo-adalab.png'
import user from '../images/userwoman.jpg'

function App() {
  const [data, setData] = useState({name:"", slogan:"", repo:"", demo:"", desc:"", technologies:"", job:"", autor:"", image:'https://m.media-amazon.com/images/I/51Q+jTasiGL.jpg', photo:'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});


  const [errorName, setErrorName] = useState('');
  const [errorSlogan, setErrorSlogan] = useState('');
  const [errorDesc, setErrorDesc] = useState('');
  const [errorTechnologies, setErrorTechnologies] = useState('');
  const [errorJob, setErrorJob] = useState('');
  const [errorAutor, setErrorAutor] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;

    setData({...data, [id] : value})
  };

  const handleCreateProject = () => {

    let hasError = false;


    if (data.name === '') {
      setErrorName('Campo Obligatorio');
      hasError = true;
    } else {
      setErrorName('');
    }

    if (data.slogan === '') {
      setErrorSlogan('Campo Obligatorio');
      hasError = true;
    } else {
      setErrorSlogan('');
    }
    if (data.technologies === '') {
      setErrorTechnologies('Campo Obligatorio');
      hasError = true;
    } else {
      setErrorTechnologies ('');
    }
    if (data.desc === '') {
      setErrorDesc('Campo Obligatorio');
      hasError = true;
    } else {
      setErrorDesc ('');
    }
    if (data.autor === '') {
      setErrorAutor('Campo Obligatorio');
      hasError = true;
    } else {
      setErrorAutor ('');
    }
    if (data.job === '') {
      setErrorJob('Campo Obligatorio');
      hasError = true;
    } else {
      setErrorJob ('');
    }

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
      <header className="header">
        <div className='header__div'>
        <a className="header__div--icon" href="#"><i className="header__div--icon--laptop fa-solid fa-laptop-code"></i></a>

        <p className="header__div--text">Proyectos Molones</p>
        </div>

        <a className='header__logo' href="https://adalab.es/"><img className='header__logo--img' src={logo} alt="Logo Adalab" /></a>

      </header>

      <main className="main">

        <section className='hero'>
          <h1 className='hero__title'>Proyectos Molones</h1>
          <p className='hero__text'>Escaparate en línea para recoger ideas a través de la tecnología</p>
          <button className='hero__button'>Ver proyectos</button>

        </section>
        <section className='section'>
          <section className="preview">

            <img className="preview__img" src={cover || data.photo} alt="" />
            
            <section className="preview__autor">
              <section className="preview__autor__infoProject">
                <div className='preview__autor__infoProject--div'>
                  <hr className="preview__autor__infoProject--div--line1" />
                  <p className="preview__autor__infoProject--div--subtitle">Personal Project Card</p>
                  <hr className="preview__autor__infoProject--div--line2" />
                </div>
                <h2 className="preview__autor__infoProject--title">{data.name || 'Elegant Workspace'}</h2>
                <p className="preview__autor__infoProject--slogan">{data.slogan || 'Diseños Exclusivos'}</p>
                <p className="preview__autor__infoProject--desc" style={{ whiteSpace: "pre-line" }}>{data.desc|| 'Product Description \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis.'}
                </p>
                <section className="preview__autor__infoProject--tecIcon">
                  <p className="preview__autor__infoProject--tecIcon--technologies">{data.technologies ||'React JS - HTML- CSS'}</p>
                  <div className='preview__autor__infoProject--tecIcon--div'>
                    <a href={data.demo || '#'}target="_blank" rel="noreferrer" className='preview__autor__infoProject--tecIcon--div--icon'><i className="fa-solid fa-globe"></i></a>
                    <a href={data.repo || '#'}target="_blank" rel="noreferrer" className='preview__autor__infoProject--tecIcon--div--icon'><i className="fa-brands fa-github"></i></a>
                  </div>
                </section>
              </section>

              <section className="preview__autor__infoAutor">
                <img className="preview__autor__infoAutor--image" src={user || data.image} alt="" />
                <p className="preview__autor__infoAutor--job">{data.job || 'Full Stack Developer'}</p>
                <p className="preview__autor__infoAutor--autor">{data.autor || 'Emmelie Björklund'}</p>
              </section>
            </section>
          </section>

            <section className="form">
            <h2 className="form__title">Información</h2>

            <section className="form__askInfo">
              <p className="form__askInfo--subtitle">Cuéntanos sobre el proyecto</p>
              <div className="form__askInfo--line"></div>
            </section>

            <fieldset className="form__project">
              <input 
                className="form__project--input"
                type="text"
                placeholder="Nombre del proyecto *"
                name="name"
                id="name"
                onChange={handleInput}
                value={data.name}
                required
              />
              <p className='errorMessage'>{errorName}</p>
              <input
                className="form__project--input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan *"
                onChange={handleInput}
                value={data.slogan}
                required
              />
              <p className='errorMessage'>{errorSlogan}</p>
              <div className='juntos'>
                  <input
                    className="form__project--input"
                    type="text"
                    name="repo"
                    id="repo"
                    placeholder="Repo"
                    onChange={handleInput}
                    value={data.repo}
                    required
                  />
                  <input
                    className="form__project--input"
                    type="text"
                    placeholder="Demo"
                    name="demo"
                    id="demo"
                    onChange={handleInput}
                    value={data.demo}
                    required
                  />
              </div>
              <input
                className="form__project--input"
                type="text"
                placeholder="Tecnologías *"
                name="technologies"
                id="technologies"
                onChange={handleInput}
                value={data.technologies}
                required
              />
              <p className='errorMessage'>{errorTechnologies}</p>
              <textarea
                className="form__project--textarea"
                type="text"
                placeholder="Descripción *"
                name="desc"
                id="desc"
                onChange={handleInput}
                value={data.desc}
                required
              ></textarea>
              <p className='errorMessage'>{errorDesc}</p>
            </fieldset>

            <section className="form__autorInfo">
              <p className="form__autorInfo--subtitle">Cuéntanos sobre la autora</p>
              <hr className="form__autorInfo--line" />
            </section>

            <fieldset className="form__autor">
              <input
                className="form__autor--input"
                type="text"
                placeholder="Nombre *"
                name="autor"
                id="autor"
                onChange={handleInput}
                value={data.autor}
                required
              />
              <p className='errorMessage'>{errorAutor}</p>
              <input
                className="form__autor--input"
                type="text"
                placeholder="Trabajo *"
                name="job"
                id="job"
                onChange={handleInput}
                value={data.job}
                required
              />
              <p className='errorMessage'>{errorJob}</p>
            </fieldset>

            <section className="form__buttons">
              <button className="form__buttons--btn">Subir foto de proyecto</button>
              <button className="form__buttons--btn">Subir foto de autora</button>
            </section>
            <section className="form__button">
              <button className="form__button--btnLarge" onClick={handleCreateProject}>
                Crear Proyecto
              </button>
            </section>

            <section className="card">
              {successMessage && (
                <>
                  <span className='linkMessage'>{successMessage}</span>
                  <a className='linkMessage' href={previewUrl} target="_blank" rel="noreferrer">  {previewUrl}
                  </a>
                </>
              )}
              {errorMessage && <span className="errorMessage">{errorMessage}</span>}
            </section>




          </section>
        </section>
      </main>
      <footer className='footer'>
        <a className='footer__logo' href="https://adalab.es/">
          <img className='footer__logo--img' src={logo} alt="Logo Adalab" />
        </a>
      </footer>
    </div>
    </>
  );
}

export default App
