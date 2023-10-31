import '../styles/layout/form.scss';
import { Link } from 'react-router-dom';

const ButtonLink = ({ className, text, root }) => {
  return (
    <Link className={className} to={`/${root}`}>
      {text}
    </Link>
  );
};

export default ButtonLink;
