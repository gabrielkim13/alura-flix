import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.getAttribute('name')]: event.target.value });
  };

  const clearForm = () => setValues(initialValues);

  return { values, handleChange, clearForm };
}

export default useForm;
