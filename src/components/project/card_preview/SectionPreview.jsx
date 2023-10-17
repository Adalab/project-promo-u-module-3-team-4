import Card from './Card';
import '../../../styles/layout/preview.scss';
import cover from '../../../images/covercut.jpg';



const SectionPreview = () => {
    return (
<section className="preview">

<img className="preview__img" src={cover || data.photo} alt="" />

<Card />
</section>
    );
}

export default SectionPreview;