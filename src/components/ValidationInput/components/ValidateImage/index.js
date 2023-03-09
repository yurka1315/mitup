import { ReactComponent as Checked } from './assets/Checked.svg';
import { ReactComponent as NoChecked } from './assets/NoChecked.svg';
import './style.css';


const ValidateImage = ({ hasError }) => {
    return (
        <>
            {hasError ? <NoChecked className='validate-image' /> : <Checked className='validate-image' />}
        </>
    );
};

export default ValidateImage;