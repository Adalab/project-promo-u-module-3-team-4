import '../../../styles/layout/form.scss';

const Butons = ({ className, text, onClick }) => {
    return (
        
          <button className={className} onClick ={onClick}>{text}</button>
      
    );
}

export default Butons; 