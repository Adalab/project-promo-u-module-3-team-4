import Card from './Card';
import '../../../styles/layout/preview.scss';
// import cover from '../../../images/covercut.jpg';
import Profile from './Profile';



const SectionPreview = ({data, avatar}) => {
    return (
<section className="preview">

{/* <img className="preview__img" src={cover || data.photo} alt="" /> */}
<Profile avatar={avatar } />

<Card data = {data} />

</section>
    );
}

export default SectionPreview;