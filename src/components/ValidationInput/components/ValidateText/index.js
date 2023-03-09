import ValidateImage from "../ValidateImage";
import './style.css';


const ValidateText = ({ title, hasError, minLength, valueLength }) => {
    return (
        <div className="validate-text__wrapper">
            {valueLength ? <ValidateImage hasError={hasError} /> : minLength ? <ValidateImage hasError={hasError} /> : ''}
            <span className='title'>{title}</span>
        </div>
    );
};

export default ValidateText;