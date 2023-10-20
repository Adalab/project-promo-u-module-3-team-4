import '../../styles/layout/hero.scss';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="hero">
      <h1 className="hero__title">Proyectos Molones</h1>
      <p className="hero__text">
        Escaparate en línea para recoger ideas a través de la tecnología
      </p>
      <button className="hero__button">Ver proyectos</button>

      <label className="dayNight">
        {isChecked ? (
          <FaSun className="sun hidden" />
        ) : (
          <FaSun className="sun" />
        )}
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="check"></span>
        {isChecked ? (
          <FaMoon className="moon" />
        ) : (
          <FaMoon className="moon hidden" />
        )}
      </label>
    </section>
  );
};

export default Hero;
