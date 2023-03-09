
import ValidateText from './components/ValidateText';
import './style.css';

const ValidationInput = ({ visible, validateValues, valueLength }) => {
    return (
        <>
            {
                visible ?
                    <div className="validate-container">
                        {validateValues.map((item, i) => (
                            <ValidateText key={i} title={item.title}
                                hasError={item.hasError} minLength={item.minLength} valueLength={valueLength} />
                        ))}
                    </div > : ''
            }
        </>
    );
};

export default ValidationInput;