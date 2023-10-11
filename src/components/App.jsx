//imports dependencias, imagenes, componentes, stylos
import {useState} from 'react';
// import reactLogo from '../images/react.svg'
import '../styles/App.scss'

import cover from '../images/covercut.jpg'

import logo from '../images/logo-adalab.png'
import user from '../images/userwoman.jpg'

function App() {
  const [data, setData] = useState({name:"", slogan:"", repo:"", demo:"", desc:"", technologies:"", job:"", autor:""});

  const handleInput = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;

    setData({...data, [id] : value})
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

            <img className="preview__img" src={cover} alt="" />
            
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
                <img className="preview__autor__infoAutor--image" src={user} alt="" />
                <p className="preview__autor__infoAutor--job">{data.job || 'Full Stack Developer'}</p>
                <p className="preview__autor__infoAutor--autor">{data.autor || 'Emmelie Björklund'}</p>
              </section>
            </section>
          </section>

            <section className="form">
            <h2 className="form__title">Información</h2>

            <section className="form__askInfo">
              <p className="form__askInfo--subtitle">Cuéntanos sobre el proyecto</p>
              <hr className="form__askInfo--line" />
            </section>

            <fieldset className="form__project">
              <input 
                className="form__project--input"
                type="text"
                placeholder="Nombre del proyecto"
                name="name"
                id="name"
                onChange={handleInput}
                value={data.name}
                required
              />
              <input
                className="form__project--input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                onChange={handleInput}
                value={data.slogan}
                required
                
                
              />
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
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
                onChange={handleInput}
                value={data.technologies}
                required
              />
              <textarea
                className="form__project--textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                onChange={handleInput}
                value={data.desc}
                required
              ></textarea>
            </fieldset>

            <section className="form__autorInfo">
              <p className="form__autorInfo--subtitle">Cuéntanos sobre la autora</p>
              <hr className="form__autorInfo--line" />
            </section>

            <fieldset className="form__autor">
              <input
                className="form__autor--input"
                type="text"
                placeholder="Nombre"
                name="autor"
                id="autor"
                onChange={handleInput}
                value={data.autor}
                required
              />
              <input
                className="form__autor--input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
                onChange={handleInput}
                value={data.job}
                required
              />
            </fieldset>

            <section className="buttons-img">
              <button className="btn">Subir foto de proyecto</button>
              <button className="btn">Subir foto de autora</button>
            </section>
            <section className="buttons-img">
              <button className="btn-large">
                Crear Tarjeta
              </button>
            </section>

            <section className="card">
              <span className=""> La tarjeta ha sido creada: </span>
              <a href="" className="" target="_blank" rel="noreferrer"> </a>
            </section>
          </section>
        </section>
      </main>
    </div>
    </>
  );
}

export default App
