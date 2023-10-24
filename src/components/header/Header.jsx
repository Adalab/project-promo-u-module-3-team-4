import '../../styles/layout/header.scss';
import logo from '../../images/logo-adalab.png';


const Header = () => {
    return (
<header className="headerDay">
        <div className='headerDay__div'>
        <a className="headerDay__div--icon" href="#"><i className="headerDay__div--icon--laptop fa-solid fa-laptop-code"></i></a>

        <p className="headerDay__div--text">Proyectos Molones</p>
        </div>

        <a className='headerDay__logo' href="https://adalab.es/"><img className='headerDay__logo--img' src={logo} alt="Logo Adalab" /></a>

      </header>
    );
}

export default Header;