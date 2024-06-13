import React from 'react';

import cx from 'clsx';

import { InputField } from '../../atoms/InputField';
import { InputWrapper } from '../InputWrapper/InputWrapper';

import classes from './InputText.module.scss';

interface IProps {
  type: 'text' | 'email';
  label: string;
  id?: string;
  errorMessage?: string;
  hasError?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function InputText({
  id,
  type,
  placeholder,
  label,
  errorMessage,
  hasError,
  disabled,
  value,
  onChange,
}: IProps) {
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
          [classes.input__field_disabled]: disabled,
        })}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}
