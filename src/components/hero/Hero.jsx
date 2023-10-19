import '../../styles/layout/hero.scss';


const Hero = () => {
    return (
        <section className='hero'>
        <h1 className='hero__title'>Proyectos Molones</h1>
        <p className='hero__text'>Escaparate en línea para recoger ideas a través de la tecnología</p>
        <button className='hero__button'>Ver proyectos</button>

        <label>
          <input type="checkbox" />
          <span className='check'></span>
        </label>
      </section>
    );
}

export default Hero;