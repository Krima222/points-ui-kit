import cx from 'clsx';

import classes from './InputField.module.scss';

interface IProps {
  id?: string;
  type?: 'text' | 'email' | 'password';
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function InputField({
  id,
  type = 'text',
  className,
  placeholder,
  value,
  onChange,
}: IProps) {
  return (
    <input
      className={cx(classes.inputField, className)}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
    />
  );
}
