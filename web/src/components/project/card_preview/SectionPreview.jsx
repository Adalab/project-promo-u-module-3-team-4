import Card from './Card';
import '../../../styles/layout/preview.scss';
import Profile from './Profile';
import defaultProject from '../../../images/projectday.jpg';

const SectionPreview = ({ data, nightMode }) => {
  return (
    <section className={nightMode ? 'previewN' : 'preview'}>
      <Profile
        avatar={data.photo || defaultProject}
        classImage={nightMode ? 'projectN__pic' : 'project__pic'}
      />

      <Card data={data} avatar={data.image} nightMode={nightMode} />
    </section>
  );
};

export default SectionPreview;
