import { Icon32Px } from '../Icon32Px';

import classes from './PlusMinus.module.scss';

interface IProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
  min?: number;
  max?: number;
}

export function PlusMinus({
  name,
  value,
  onChange,
  required,
  min,
  max,
}: IProps) {
  function inc() {
    onChange(value + 1);
  }

  function dec() {
    onChange(value - 1);
  }

  // В данном случае handleChange не нужен, но react выкидывает ошибку если передать value без него
  // можно конечно передавать defaultValue или вообще забить, но хз как поведёт себя браузер
  function handleChange() {}

  return (
    <div className={classes.counter}>
      <button
        type="button"
        className={classes.counter__button}
        onClick={dec}
        disabled={min ? value <= min : false}
      >
        <Icon32Px name="minus" color="blue" />
      </button>

      <div className={classes.counter__inputWrapper}>
        <input
          className={classes.counter__input}
          type="number"
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          min={min}
          max={max}
        />
        <span className={classes.counter__inputReplacement}>{value}</span>
      </div>

      <button
        type="button"
        className={classes.counter__button}
        onClick={inc}
        disabled={max ? value >= max : false}
      >
        <Icon32Px name="plus" color="blue" />
      </button>
    </div>
  );
}
