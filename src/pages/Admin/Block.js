import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useInputValidate from '../../hooks/useInputValidate';
import {tc_regex} from '../../hooks/formRegexValidate'

function Block() {

   /*  const {
        value: tcValue,
        hasError: tcInputError,
        valueChangeHandler: tcChangeHandler,
        inputBlurHandler: tcBlurHandler,
  } = useInputValidate((value) => tc_regex.test(value));

    const addBlockSubmit = (e) => {
        e.preventDefault();
  } */

  return (
    <div>Block</div>
  )
}

export default Block


