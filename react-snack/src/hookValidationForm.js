import { useEffect, useState } from "react";

export const UseValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "maxLength":
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
          break;
        case "minLength":
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        case "isPhone":
          const re1 = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
          re1.test(value) ? setPhoneError(false) : setPhoneError(true);
          break;

        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError || phoneError) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError, phoneError]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
    validInput
  };
};

export const UseInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = UseValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};
