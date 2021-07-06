import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input(props) {
  const { name, label, value, error = null, type, onChange, ...other } = props;

  return (
    <TextField
      variant="outlined"
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      size="small"
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Input;
