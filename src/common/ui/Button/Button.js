import React from 'react';
import propTypes from 'prop-types';
import {
  Button as MaterialButton,
} from '@material-ui/core';

const Button = ({
  children,
  className,
  color,
  disabled,
  icon,
  name,
  onClick,
  type,
}) => (
  <MaterialButton
    className={className}
    color={color}
    disabled={disabled}
    name={name}
    onClick={onClick}
    type={type}
    variant="contained"
  >
      <>
        {icon && icon}
        {children}
      </>
  </MaterialButton>
);

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
  ]),
  disabled: propTypes.bool,
  icon: propTypes.object,
  name: propTypes.string,
  onClick: propTypes.func,
  type: propTypes.oneOf([
    'button',
    'submit',
  ]),
  value: propTypes.string,
};

Button.defaultProps = {
  children: null,
  className: null,
  color: 'primary',
  disabled: false,
  name: null,
  type: 'button',
  value: null,
};

export default Button;
