import {useState} from 'react';

const useInputValidate = (validateValue) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const isValid =  validateValue(value);
    const hasError = !isValid && isTouched;
    const valueInputClass = hasError ? 'form-control-invalid' : '';

    const valueChangeHandler = (e) => setValue(e?.target?.value);

    const inputBlurHandler = () => setIsTouched(true);
    
    const resetInput = () => {
        setValue('');
        setIsTouched(false);
    }

    return {
        value,
        isValid,
        hasError,
        valueInputClass,
        valueChangeHandler,
        inputBlurHandler,
        resetInput,
    }
}

export default useInputValidate;