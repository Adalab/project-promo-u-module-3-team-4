import '../../../styles/layout/form.scss';
import Butons from './Butons';

const Form = ({data, errorName, errorSlogan, errorDesc, errorTechnologies, errorJob, errorAutor,errorDemo, errorRepo, previewUrl, successMessage, errorMessage, handleInput, handleCreateProject}) => {

  const handleInputForm = (ev)=> {

    const id = ev.target.id;
    const value = ev.target.value;

    handleInput({ ...data, [id]: value });

  }

  /* 
   Se ha creado un nueva función con el nombre que quieras que ahora es el evento y recoge los parametros que tenia antes la handleInput del App. Le retorna a APP los resultados a través de la linea 11.
   Además se ha cambiado los onChange de {handleInput} a {handleInputForm}
  */



    return (
        <form className="form"  onSubmit={(ev)=>{ev.preventDefault()}} >
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
                onChange={handleInputForm }
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
                onChange={handleInputForm }
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
                    placeholder="Repo *"
                    onChange={handleInputForm }
                    value={data.repo}
                    required
                  />
                  <p className='errorMessage'>{errorRepo}</p>
                  <input
                    className="form__project--input"
                    type="text"
                    placeholder="Demo *"
                    name="demo"
                    id="demo"
                    onChange={handleInputForm }
                    value={data.demo}
                    required
                  />
                  <p className='errorMessage'>{errorDemo}</p>
              </div>
              <input
                className="form__project--input"
                type="text"
                placeholder="Tecnologías *"
                name="technologies"
                id="technologies"
                onChange={handleInputForm }
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
                onChange={handleInputForm }
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
                onChange={handleInputForm }
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
                onChange={handleInputForm }
                value={data.job}
                required
              />
              <p className='errorMessage'>{errorJob}</p>
            </fieldset>
            
            <section className="form__buttons">
                <Butons onClick={handleCreateProject} text='Subir foto del proyecto' className='form__buttons--btn'/>
                <Butons onClick={handleCreateProject} text= 'Subir foto de la autora' className='form__buttons--btn'/>
            </section>
            <section className="form__button">
              <Butons onClick={handleCreateProject} text='Crear proyecto' className='form__button--btnLarge'/>
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
            </form>
    );
}

export default Form;