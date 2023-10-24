import Card from './project/card_preview/Card';
import SectionPreview from './project/card_preview/SectionPreview';
import Profile from './project/card_preview/Profile';
import Imagen from '../images/projectday.jpg';
import '../styles/layout/Landing.scss';
import Hero from './hero/Hero';
import '../styles/layout/hero.scss';
import ButtonLink from './ButtonLink';

const Landing = ({ data }) => {
  return (

    <div className='container-landing'>
      <main className="main-landing">
        <Hero />
        <ButtonLink
          className="hero__button"
          text="Crea tu proyecto"
          root="create"
        />
        <section className="section-landing">
          <Card data={data} />
        </section>
      </main>
    </div>
  );
};

export default Landing;
