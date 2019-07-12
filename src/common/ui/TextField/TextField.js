import React from 'react';
import propTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input as MaterialInput,
} from '@material-ui/core';

const TextField = ({
  autoComplete,
  autoFocus,
  className,
  disabled,
  errorMessage,
  id,
  isError,
  label,
  name,
  onChange,
  required,
  type,
  value,
}) => (

  <FormControl className={className}>
    {label
      ? <InputLabel
        error={isError}
        htmlFor={name}
        required={required}
        shrink={true}
      >
        {label}
      </InputLabel>
      : ''
    }
    <MaterialInput
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
    {isError ? <p className='error-message'>{errorMessage}</p> : ''}
  </FormControl>
);

TextField.propTypes = {
  autoComplete: propTypes.oneOf([
    'on',
    'off',
  ]),
  autoFocus: propTypes.bool,
  className: propTypes.string,
  disabled: propTypes.bool,
  errorMessage: propTypes.string,
  icon: propTypes.string,
  id: propTypes.string,
  isError: propTypes.bool,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  required: propTypes.bool,
  type: propTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'text',
    'url',
  ]),
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

TextField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  className: null,
  disabled: false,
  errorMessage: null,
  icon: null,
  id: null,
  isError: false,
  label: null,
  name: null,
  required: false,
  type: 'text',
  value: '',
};

export default TextField;
