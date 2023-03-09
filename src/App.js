import { useState } from "react";
import PageWrapper from "./components/PageWrapper";
import ValidationInput from "./components/ValidationInput";
import { useValidateInfo } from "./components/ValidationInput/hooks/useValidateInfo";
import './style.css';


const initialValues = [
  {
    title: 'Состоит из латинских букв или кириллицы',
    hasError: true,
    regexp: /(^[a-z\-'\s]+)$|(^[а-яё\-'\s]+)$/i,
    minLength: 0
  },
  {
    title: 'Начинается с заглавной буквы',
    hasError: true,
    regexp: /^([A-Z]|[А-ЯЁ])/,
    minLength: 0
  },
  {
    title: 'Не короче 1 символа',
    hasError: true,
    regexp: /[a-zа-яё'-]+/i,
    minLength: 1
  },
  {
    title: 'Не более 3х вспомогательных символов ( ‘ и -)',
    hasError: true,
    regexp: /^([a-zа-яё\d]+?\s?[-']?[a-zа-яё\d]*\s?){1,3}$/i,
    minLength: 0
  }
];

function App() {
  const [value, setValue] = useState('');
  const validateInputInfo = useValidateInfo(initialValues, value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    validateInputInfo.setVisibleInfo(true);
  };

  const handleOnBlur = () => {
    validateInputInfo.setVisibleInfo(false);
  };

  return (
    <PageWrapper>
      <form className="form">
        <div className="input-container">
          <input
            className="input"
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleOnBlur}
          />
          <ValidationInput visible={validateInputInfo.visibleInfo} validateValues={validateInputInfo.validateInfo} valueLength={value} />
        </div>
      </form>
    </PageWrapper>
  );
}

export default App;
