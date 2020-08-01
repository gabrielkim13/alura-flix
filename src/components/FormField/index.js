import React from 'react';
import PropTypes from 'prop-types';

function FormField({ label, type, name, value, onChange }) {
  const InputType = type === 'textarea' ? 'textarea' : 'input';

  return (
    <>
      <label htmlFor={`id_${name}`}>
        {label}
        :
        <InputType id={`id_${name}`} type={type} name={name} value={value} onChange={onChange} />
      </label>
    </>
  );
}

FormField.defaultProps = {
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
