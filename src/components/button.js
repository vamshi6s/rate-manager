import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/style.scss';


const Button = ({value, onClick,className}) => (
    <button
        className={className}
        onClick={(event) => onClick(event)}>
        {value}
    </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default Button;