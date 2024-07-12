import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styles';

const Button = ({ type, children, ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
