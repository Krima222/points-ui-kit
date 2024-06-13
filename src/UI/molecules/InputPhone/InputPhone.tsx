import cx from 'clsx';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { InputWrapper } from '../InputWrapper';

import classes from './InputPhone.module.scss';

interface IProps {
  id: string;
  label: string;
  errorMessage: string;
  hasError: boolean;
  disabled: boolean;
  value?: string;
  onChange?: (value?: string) => void;
}

export function InputPhone({
  id,
  label,
  errorMessage,
  hasError,
  disabled,
  value,
  onChange,
}: IProps) {
  const inputHasValue = value !== '';

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
        className={cx(classes.input__field, {
          [classes.input__field_withValue]: inputHasValue,
          [classes.input__field_disabled]: disabled,
        })}
      >
        <PhoneInput
          international
          defaultCountry="RU"
          flags={flags}
          value={value}
          onChange={(v) => {
            onChange?.(v?.toString());
          }}
          className={classes.phoneInput}
          style={{
            alignItems: 'center',
            '--PhoneInputCountryFlag-backgroundColor--loading': 'transparent',
            '--PhoneInputCountryFlag-borderWidth': '2px',
            '--PhoneInputCountryFlag-borderColor': '#050556',
            '--PhoneInputCountryFlag-borderColor--focus': '#3851d2',
          }}
        />
      </div>
    </InputWrapper>
  );
}
