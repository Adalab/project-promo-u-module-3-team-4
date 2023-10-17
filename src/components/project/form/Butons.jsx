import '../../../styles/layout/form.scss';

const Butons = () => {
    return (
        <>
        <section className="form__buttons">
              <button className="form__buttons--btn">Subir foto de proyecto</button>
              <button className="form__buttons--btn">Subir foto de autora</button>
            </section>
            <section className="form__button">
              <button className="form__button--btnLarge"
               onClick={handleCreateProject}
               >
                Crear Proyecto
              </button>
            </section>
            </>

    );
}

export default Butons;