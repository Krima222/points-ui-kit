import { useState } from 'react';

import cx from 'clsx';

import { DatePicker } from '../../atoms/DatePicker/DatePicker';
import { Icon32Px } from '../../atoms/Icon32Px';
import { InputWrapper } from '../InputWrapper/InputWrapper';

import classes from './InputDateEntry.module.scss';

interface IProps {
  id: string;
  label: string;
  errorMessage: string;
  hasError: boolean;
  disabled: boolean;
  value?: Date | null;
  onChange?: (selectedDate: Date | null) => void;
}
export function InputDateEntry({
  id,
  label,
  errorMessage,
  hasError,
  disabled,
  value,
  onChange,
}: IProps) {
  const [click, setClick] = useState<boolean>(false);

  const activDate = () => {
    setClick(true);
  };

  const onBlurHandler = () => {
    setClick(false);
  };

  const inputHasValue = value !== null;
  return (
    <InputWrapper
      label={label}
      id={id}
      inputHasValue={inputHasValue}
      errorMessage={errorMessage}
      hasError={hasError}
      disabled={disabled}
    >
      <div
        className={cx(classes.container, {
          [classes.container_withValue]: inputHasValue || click,
          [classes.container_disabled]: disabled,
        })}
      >
        <button onFocus={activDate} onBlur={onBlurHandler}>
          <DatePicker onChange={onChange} disabled={disabled} value={value} />
        </button>
      </div>
      <div className={classes.icon}>
        <Icon32Px name="calendar" />
      </div>
    </InputWrapper>
  );
}
