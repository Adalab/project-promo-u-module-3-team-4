import '../../styles/layout/hero.scss';

const Hero = ({ nightMode }) => {
  return (
    <section className={nightMode ? 'heroN' : 'hero'}>
      <h1 className={nightMode ? 'heroN__title' : 'hero__title'}>
        Proyectos Molones
      </h1>
      <p className={nightMode ? 'heroN__text' : 'hero__text'}>
        Escaparate en línea para recoger ideas a través de la tecnología
      </p>
    </section>
  );
};

export default Hero;
