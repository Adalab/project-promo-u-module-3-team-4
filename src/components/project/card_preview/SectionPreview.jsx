import Card from './Card';
import '../../../styles/layout/preview.scss';
import Profile from './Profile';
import defaultProject from '../../../images/covercut.jpg';

const SectionPreview = ({ data }) => {
  return (
    <section className="preview">
      <Profile avatar={data.photo || defaultProject} />

      <Card data={data} avatar={data.image} />
    </section>
  );
};

export default SectionPreview;
