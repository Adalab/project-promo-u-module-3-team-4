import '../../../styles/layout/form.scss';
import Butons from './Butons';
import GetAvatar from './GetAvatar';

const Form = ({
  data,
  errorName,
  errorSlogan,
  errorDesc,
  errorTechnologies,
  errorJob,
  errorAutor,
  errorDemo,
  errorRepo,
  previewUrl,
  successMessage,
  errorMessage,
  handleInput,
  handleCreateProject,
  updateImgProfile,
  updateImgProject,
  handleReset,
  nightMode,
}) => {
  const handleInputForm = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;

    handleInput({ ...data, [id]: value });
  };

  const handleResetForm = (ev) => {
    handleReset({
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
      previewUrl: '',
      successMessage: '',
      errorMessage: '',
    });
  };

  return (
    <form
      className={nightMode ? 'formN' : 'form'}
      onSubmit={(ev) => {
        ev.preventDefault();
      }}
    >
      <h2 className={nightMode ? 'formN__title' : 'form__title'}>
        Información
      </h2>

      <section className={nightMode ? 'formN__askInfo' : 'form__askInfo'}>
        <p
          className={
            nightMode ? 'formN__askInfo--subtitle' : 'form__askInfo--subtitle'
          }
        >
          Cuéntanos sobre el proyecto
        </p>
        <div
          className={nightMode ? 'formN__askInfo--line' : 'form__askInfo--line'}
        ></div>
      </section>

      <fieldset className={nightMode ? 'formN__project' : 'form__project'}>
        <input
          className={
            nightMode ? 'formN__project--input' : 'form__project--input'
          }
          type="text"
          placeholder="Nombre del proyecto *"
          name="name"
          id="name"
          onChange={handleInputForm}
          value={data.name}
          required
        />
        <p className="errorMessage">{errorName}</p>
        <input
          className={
            nightMode ? 'formN__project--input' : 'form__project--input'
          }
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan *"
          onChange={handleInputForm}
          value={data.slogan}
          required
        />
        <p className="errorMessage">{errorSlogan}</p>
        <div className="juntos">
          <input
            className={
              nightMode ? 'formN__project--input' : 'form__project--input'
            }
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo *"
            onChange={handleInputForm}
            value={data.repo}
            required
          />
          <p className="errorMessage">{errorRepo}</p>
          <input
            className={
              nightMode ? 'formN__project--input' : 'form__project--input'
            }
            type="text"
            placeholder="Demo *"
            name="demo"
            id="demo"
            onChange={handleInputForm}
            value={data.demo}
            required
          />
          <p className="errorMessage">{errorDemo}</p>
        </div>
        <input
          className={
            nightMode ? 'formN__project--input' : 'form__project--input'
          }
          type="text"
          placeholder="Tecnologías *"
          name="technologies"
          id="technologies"
          onChange={handleInputForm}
          value={data.technologies}
          required
        />
        <p className="errorMessage">{errorTechnologies}</p>
        <textarea
          className={
            nightMode ? 'formN__project--textarea' : 'form__project--textarea'
          }
          type="text"
          placeholder="Descripción *"
          name="description"
          id="description"
          onChange={handleInputForm}
          value={data.description}
          required
        ></textarea>
        <p className="errorMessage">{errorDesc}</p>
      </fieldset>

      <section className={nightMode ? 'formN__autorInfo' : 'form__autorInfo'}>
        <p
          className={
            nightMode
              ? 'formN__autorInfo--subtitle'
              : 'form__autorInfo--subtitle'
          }
        >
          Cuéntanos sobre la autora
        </p>
        <hr
          className={
            nightMode ? 'formN__autorInfo--line' : 'form__autorInfo--line'
          }
        />
      </section>

      <fieldset className={nightMode ? 'formN__autor' : 'form__autor'}>
        <input
          className={nightMode ? 'formN__autor--input' : 'form__autor--input'}
          type="text"
          placeholder="Nombre *"
          name="autor"
          id="autor"
          onChange={handleInputForm}
          value={data.autor}
          required
        />
        <p className="errorMessage">{errorAutor}</p>
        <input
          className={nightMode ? 'formN__autor--input' : 'form__autor--input'}
          type="text"
          placeholder="Trabajo *"
          name="job"
          id="job"
          onChange={handleInputForm}
          value={data.job}
          required
        />
        <p className="errorMessage">{errorJob}</p>
      </fieldset>

      <section className="section__buttons">
        <GetAvatar
          updateAvatar={updateImgProject}
          text={'Subir foto del proyecto'}
        />
        <GetAvatar
          updateAvatar={updateImgProfile}
          text={'Subir foto de la autora'}
        />
      </section>
      <section className="form__button">
        <Butons
          onClick={handleCreateProject}
          text="Crear proyecto"
          className="form__button--btnLarge"
        />
        <Butons
          onClick={handleResetForm}
          text=""
          className="form__button--btnReset fa-regular fa-trash-can fa-2xl"
        />
      </section>

      <section className="card">
        {successMessage && (
          <>
            <span className="linkMessage">{successMessage}</span>
            <a
              className="linkMessage"
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              {previewUrl}
            </a>
          </>
        )}
        {errorMessage && <span className="errorMessage">{errorMessage}</span>}
      </section>
    </form>
  );
};

export default Form;
