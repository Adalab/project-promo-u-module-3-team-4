import '../../../styles/layout/preview.scss';
import Profile from './Profile';
import defaultProfile from '../../../images/avatarnew.png';

const Card = ({ data, classLanding }) => {
  return (
    <section className={`preview__autor ${classLanding}`}>
      <section className="preview__autor__infoProject">
        <div className="preview__autor__infoProject--div">
          <hr className="preview__autor__infoProject--div--line1" />
          <p className="preview__autor__infoProject--div--subtitle">
            Personal Project Card
          </p>
          <hr className="preview__autor__infoProject--div--line2" />
        </div>
        <h2 className="preview__autor__infoProject--title">
          {data.name || 'Elegant Workspace'}
        </h2>
        <p className="preview__autor__infoProject--slogan">
          {data.slogan || 'Diseños Exclusivos'}
        </p>
        <p
          className="preview__autor__infoProject--desc"
          style={{ whiteSpace: 'pre-line' }}
        >
          {data.description ||
            'Product Description \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis.'}
        </p>
        <section className="preview__autor__infoProject--tecIcon">
          <p className="preview__autor__infoProject--tecIcon--technologies">
            {data.technologies || 'React JS - HTML- CSS'}
          </p>
          <div className="preview__autor__infoProject--tecIcon--div">
            <a
              href={data.demo || '#'}
              target="_blank"
              rel="noreferrer"
              className="preview__autor__infoProject--tecIcon--div--icon"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
            <a
              href={data.repo || '#'}
              target="_blank"
              rel="noreferrer"
              className="preview__autor__infoProject--tecIcon--div--icon"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </section>
      </section>

      <section className="preview__autor__infoAutor">
        <Profile
          avatar={data.image || defaultProfile}
          classImage="profile__pic"
        />
        <p className="preview__autor__infoAutor--job">
          {data.job || 'Full Stack Developer'}
        </p>
        <p className="preview__autor__infoAutor--autor">
          {data.autor || 'Emmelie Björklund'}
        </p>
      </section>
    </section>
  );
};

export default Card;
