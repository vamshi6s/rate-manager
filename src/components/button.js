import React from 'react';
import PropTypes from 'prop-types';


const Button = ({value, onClick}) => (
    <button
        className='m-10 button'
        onClick={(event) => onClick(event)}>
        {value}
    </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    styleClass: 'btn-primary'
};

export default Button;