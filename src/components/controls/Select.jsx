import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    width: '100%',
  },
}));

export default function Select(props) {
  const classes = useStyles();
  const { name, label, value, onChange, options } = props;

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      size="small"
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        {options.map(item => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
