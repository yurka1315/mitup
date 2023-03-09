import { useEffect, useState } from "react";


export const useValidateInfo = (initialValues, input) => {
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [validateInfo, setValidateInfo] = useState(initialValues);

  const handleValidate = () => {
    const newValue = validateInfo.map((el) => {
      if (el.regexp.test(input)) {
        return { ...el, hasError: false };
      } else {
        return { ...el, hasError: true };
      }
    });
    setValidateInfo(newValue);
  };

  useEffect(() => {
    handleValidate();
  }, [input]);

  return { visibleInfo, setVisibleInfo, validateInfo };
};