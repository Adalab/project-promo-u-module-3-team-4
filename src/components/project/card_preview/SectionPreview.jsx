import Card from './Card';
import '../../../styles/layout/preview.scss';
import Profile from './Profile';
import defaultProject from '../../../images/projectday.jpg';

const SectionPreview = ({ data }) => {
  return (
    <section className="preview">
      <Profile
        avatar={data.photo || defaultProject}
        classImage="project__pic"
      />

      <Card data={data} avatar={data.image} />
    </section>
  );
};

export default SectionPreview;
