//imports dependencias, imagenes, componentes, stylos
import {useState} from 'react';
// import reactLogo from '../images/react.svg'
import '../styles/App.scss'

import cover from '../images/cover.jpeg'

import logo from '../images/logo-adalab.png'
import user from '../images/user.jpeg'

function App() {
  const [name, setName] = useState ("");
  const [slogan, setSlogan] = useState ("");
  const [repo, setRepo] = useState ("");
  const [demo, setDemo] = useState ("");
  const [desc, setDesc] = useState ("");
  const [technologies, setTechnologies] = useState ("");
  const [job, setJob] = useState ("");
  const [autor, setAutor] = useState ("");
  
  
    const handleInput = (ev) => {
      
    const inputId = ev.target.id;

     
     if (inputId === "name") {
     setName(ev.target.value)
     
     } else if (inputId==="slogan"){
    setSlogan(ev.target.value)
     }else if (inputId==="repo"){
      setRepo(ev.target.value)
     }else if (inputId==="demo"){
      setDemo(ev.target.value)
     } else if (inputId==="desc"){
      setDesc(ev.target.value)
    }else if (inputId==="technologies"){
      setTechnologies(ev.target.value)
    }else if (inputId==="job"){
      setJob(ev.target.value)
    }else if(inputId==="autor"){
      setAutor(ev.target.value)
    }


  };


  
  
 
//html
  return (
    <>
      <div className="container">
      <header className="header">
        <a className="header__icon" href="#"><i className="header__icon--laptop fa-solid fa-laptop-code"></i></a>

        <p className="header__text">Proyectos Molones</p>

        <a className='header__logo' href="https://adalab.es/"><img className='header__logo--img' src={logo} alt="Logo Adalab" /></a>

      </header>

      <main className="main">

        <section className='hero'>
          <h1 className='hero__title'>Proyectos Molones</h1>
          <p className='hero__text'>Escaparate en línea para recoger ideas a través de la tecnología</p>
          <button className='hero__button'>Ver proyectos</button>

        </section>



        <section className="preview">

          <img className="image-principal" src={cover} alt="" />
          

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">{name || 'Elegant Workspace'}</h2>
              <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">{desc|| 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
              </p>
              <section className="technologies">
                <p className="text">{technologies ||'React JS, MongoDB'}</p>
              </section>
              <section className= "icons">
                <a href={demo || '#'}target="_blank"><i className="fa-solid fa-globe"></i></a>
                <a href={repo || '#'}target="_blank"><i className="fa-brands fa-github"></i></a>

              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{job || 'Full Stack Developer'}</p>
              <p className="autor">{autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input 
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              onChange={handleInput}
              value={name}
              required
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleInput}
              value={slogan}
              required
              
              
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              onChange={handleInput}
              value={repo}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              onChange={handleInput}
              value={demo}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              onChange={handleInput}
              value={technologies}
              required
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              onChange={handleInput}
              value={desc}
              required
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              onChange={handleInput}
              value={autor}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              onChange={handleInput}
              value={job}
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
      </main>
    </div>
    </>
  );
}

export default App
