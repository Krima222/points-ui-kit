import { useState, useRef, useEffect } from 'react';

import cx from 'clsx';

import { Icon32Px } from '../../atoms/Icon32Px';
import { InputWrapper } from '../InputWrapper';

import classes from './InputDropDown.module.scss';

interface IProps {
  id: string;
  label: string;
  errorMessage: string;
  hasError: boolean;
  disabled: boolean;
  value?: string;
  onChange?: (value?: string) => void;
  options: {
    id: string;
    imgURL: string;
    label: string;
    value: string;
  }[];
}

export function InputDropDown({
  id,
  label,
  value,
  onChange,
  errorMessage,
  hasError,
  disabled,
  options,
}: IProps) {
  // const [value, setValue] = useState(items[0].title);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const inputHasValue = value !== '';

  const handleSelect = (v: string) => {
    // setValue(option);
    onChange?.(v);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
        ref={dropdownRef}
        className={cx(classes.container, {
          [classes.container_withValue]: inputHasValue,
          [classes.container_disabled]: disabled,
        })}
      >
        <button
          className={classes.dropdown__button}
          onClick={() => setIsOpen(true)}
        >
          {options.find((option) => option.value === value)?.label ||
            options[0].label}
        </button>
        {isOpen && (
          <div className={classes.dropdown}>
            <ul className={classes.dropdown__list}>
              {options.map((item) => (
                <li
                  value={item.label}
                  key={item.id}
                  className={classes.dropdown__item}
                >
                  <button
                    className={classes.dropdown__button}
                    onClick={() => {
                      handleSelect(item.value);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={classes.icon}>
        {isOpen ? <Icon32Px name="dropDownUp" /> : <Icon32Px name="dropDown" />}
      </div>
    </InputWrapper>
  );
}
