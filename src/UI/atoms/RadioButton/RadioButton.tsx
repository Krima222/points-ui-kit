import classes from './RadioButton.module.scss';

type IProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
};

export function RadioButton({
  name,
  value,
  checked,
  onChange,
  disabled,
  required,
}: IProps) {
  return (
    <input
      className={classes.input}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      required={required}
    />
  );
}
