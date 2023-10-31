import '../../styles/layout/footer.scss'
import logo from '../../images/logo-adalab.png';

const Footer = () => {
    return (
<footer className='footer'>
        <a className='footer__logo' href="https://adalab.es/">
          <img className='footer__logo--img' src={logo} alt="Logo Adalab" />
        </a>
      </footer>
    );
}

export default Footer;