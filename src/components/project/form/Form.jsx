import '../../../styles/layout/form.scss';

const Form = () => {
    return (
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

            <Butons />

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
    );
}

export default Form;