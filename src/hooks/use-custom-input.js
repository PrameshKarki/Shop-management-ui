import { useState } from "react";
const useCustomInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = value => {
        setEnteredValue(value);
    }
    const inputBlurHandler = value => {
        setIsTouched(true);
    }
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        reset,
        valueChangeHandler,
        inputBlurHandler
    }
}

export default useCustomInput;