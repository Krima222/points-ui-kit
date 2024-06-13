import React, { useState } from 'react';

import cx from 'clsx';

import { Icon32Px } from '../../atoms/Icon32Px';
import { InputField } from '../../atoms/InputField';
import { InputWrapper } from '../InputWrapper/InputWrapper';

import classes from './InputPassword.module.scss';

interface IProps {
  label: string;
  errorMessage?: string;
  hasError?: boolean;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function InputPassword({
  id,
  placeholder,
  label,
  errorMessage,
  hasError,
  disabled,
  value,
  onChange,
}: IProps) {
  const [isInputTypePassword, setIsInputTypePassword] = useState(true);

  const changeTypeIcon = isInputTypePassword ? (
    <Icon32Px name="eyeOff" />
  ) : (
    <Icon32Px name="eyeOn" />
  );
  const inputType = isInputTypePassword ? 'password' : 'text';

  return (
    <InputWrapper
      label={label}
      id={id}
      inputHasValue={Boolean(value?.length)}
      errorMessage={errorMessage}
      hasError={hasError}
      disabled={disabled}
    >
      <InputField
        id={id}
        className={cx(classes.input__field, {
          [classes.input__field_withValue]: value?.length,
          [classes.input_disabled]: disabled,
        })}
        placeholder={placeholder}
        type={inputType}
        value={value}
        onChange={onChange}
      />

      <button
        className={classes.input__changeType}
        type="button"
        onClick={() => setIsInputTypePassword(!isInputTypePassword)}
      >
        {changeTypeIcon}
      </button>
    </InputWrapper>
  );
}
