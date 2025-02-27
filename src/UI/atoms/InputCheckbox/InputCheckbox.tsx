import { MarkSvg } from './MarkSvg';

import classes from './InputCheckbox.module.scss';

interface ICommonProps {
  name: string;
  checked: boolean;
  required?: boolean;
  disabled?: boolean;
}

interface IPropsWithValue extends ICommonProps {
  onChange: (value: string) => void;
  value: string;
}

interface IPropsWithoutValue extends ICommonProps {
  onChange: (value: boolean) => void;
  value?: never;
}

export function InputCheckbox({
  name,
  checked,
  onChange,
  value,
  required,
  disabled,
}: IPropsWithValue | IPropsWithoutValue) {
  return (
    <div className={classes.checkbox}>
      <input
        className={classes.checkbox__input}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={() => {
          if (typeof value === 'string') {
            onChange(checked ? '' : value);
          } else {
            onChange(!checked);
          }
        }}
        required={required}
        disabled={disabled}
      />
      <MarkSvg className={classes.checkbox__mark} />
    </div>
  );
}
