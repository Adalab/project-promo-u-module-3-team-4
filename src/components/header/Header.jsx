import '../../styles/layout/header.scss';
import logo from '../../images/logo-adalab.png';


const Header = () => {
    return (
<header className="header">
        <div className='header__div'>
        <a className="header__div--icon" href="#"><i className="header__div--icon--laptop fa-solid fa-laptop-code"></i></a>

        <p className="header__div--text">Proyectos Molones</p>
        </div>

        <a className='header__logo' href="https://adalab.es/"><img className='header__logo--img' src={logo} alt="Logo Adalab" /></a>

      </header>
    );
}

export default Header;