import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../../Styles/style.scss';

import {validateInput} from '../../Utils/Validator.js';

const InputField = ({value, label, placeholder, validators, type, onChange,className}) => {
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const {value} = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };

    return (
        <div>
            {label && <label htmlFor="app-input-field">{label}</label>}

            {type === 'textarea' ? (
                <textarea
                className={className}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={value}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type={type}
                    className={className}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            ) }
            {error && <span className='text-danger'>{error.message}</span>}
        </div>
    )
};

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: []
};

export default InputField;