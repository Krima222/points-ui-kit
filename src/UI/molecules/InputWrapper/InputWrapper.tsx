import { ReactNode } from 'react';

import cx from 'clsx';

import { Notification } from '../../atoms/Notification';
import { Text } from '../../atoms/Text';

import classes from './InputWrapper.module.scss';

interface IProps {
  label: string;
  inputHasValue: boolean;
  children: ReactNode;
  id?: string;
  errorMessage?: string;
  hasError?: boolean;
  disabled?: boolean;
}

export function InputWrapper({
  id,
  label,
  inputHasValue,
  errorMessage,
  hasError,
  disabled,
  children,
}: IProps) {
  return (
    <div className={classes.wrapper}>
      <label
        htmlFor={id}
        className={cx(classes.input, {
          [classes.input_hasError]: hasError,
          [classes.input_disabled]: disabled,
        })}
      >
        <Text
          className={cx(classes.input__label, {
            [classes.input__label_visible]: inputHasValue,
          })}
          variant="small"
          color="gray30"
        >
          {label}
        </Text>
        <div
          className={cx(classes.input__field, {
            [classes.input__field_withValue]: inputHasValue,
          })}
        >
          {children}
        </div>
      </label>

      {hasError && <Notification text={errorMessage} iconColor="red" />}
    </div>
  );
}
