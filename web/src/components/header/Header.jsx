import '../../styles/layout/header.scss';
import logo from '../../images/logo-adalab.png';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { useState } from 'react';

const Header = ({ nightMode, handleMode }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => {
    handleMode(!nightMode);
    setIsChecked(!isChecked);
    setIsHidden(!isHidden);
  };
  return (
    <header className={nightMode ? 'headerN' : 'headerDay'}>
      <div className={nightMode ? 'headerN__div' : 'headerDay__div'}>
        <a
          className={
            nightMode
              ? 'headerN__div--icon fa-solid fa-laptop-code'
              : 'headerDay__div--icon fa-solid fa-laptop-code'
          }
          href="#"
        >
          {/* <i className="headerDay__div--icon--laptop fa-solid fa-laptop-code"></i> */}
        </a>

        <p
          className={nightMode ? 'headerN__div--text' : 'headerDay__div--text'}
        >
          Proyectos Molones
        </p>
      </div>

      <button className="switch" id="switch" onClick={handleClick}>
      <span>
          <FaSun className="fas" />
        </span>
        <span>
          <FaMoon className="fas" />
        </span>
      </button>

      <a className="headerDay__logo" href="https://adalab.es/">
        <img className="headerDay__logo--img" src={logo} alt="Logo Adalab" />
      </a>
    </header>
  );
};

export default Header;
