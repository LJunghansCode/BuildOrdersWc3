import * as React from 'react';
import TextField from '@material-ui/core/TextField';


// @HACK
// This is stolen from https://github.com/Deadly0/final-form-material-ui/blob/master/src/TextField.tsx
// because I needed to give it extraInput.
export const TextFieldInput = (
  // eslint-disable-next-line react/prop-types
  { input: { name, onChange, value, ...restInput }, meta, hotKeys, handlers, ...rest },
) => {
  const showError = (
    (meta.submitError && !meta.dirtySinceLastSubmit) || meta.error
  ) && meta.touched;

  return (
    <span {...{ ...hotKeys, handlers }}>
      <TextField
        {...rest}
        name={name}
        helperText={showError ? meta.error || meta.submitError : undefined}
        error={showError}
        inputProps={{ ...restInput }}
        onChange={onChange}
        value={value}
      />
    </span>
  );
};
