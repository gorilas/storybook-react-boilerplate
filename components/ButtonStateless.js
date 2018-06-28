import React from 'react';
import PropTypes from 'prop-types';

const handleClick = (e) =>{
  console.log('clicked');
};

/*
const ButtonStateless = ({name}) => (
  <span>{`Hola ${name}`}</span>
);
*/

const ButtonStateless = (props) => {
  return (
    <span onClick={handleClick} className="c-button">Click me - Hola {props.name} - {props.children}</span>
  )
}

ButtonStateless.propTypes = {
  // props types and required
  name: PropTypes.string.isRequired
};

ButtonStateless.defaultProps = {
  // default props, initial states
  name: 'Mundo!'
};

export default ButtonStateless; // Don’t forget to use export default!