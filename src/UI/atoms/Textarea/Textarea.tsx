import React, { ChangeEvent, useRef, useLayoutEffect } from 'react';

import cx from 'clsx';

import classes from './Textarea.module.scss';

interface IProps {
  name?: string;
  value: string;
  multiline?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({
  name,
  value,
  multiline,
  disabled,
  required,
  onChange,
  onBlur,
}: IProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useLayoutEffect(() => {
    if (textareaRef && textareaRef.current && multiline) {
      textareaRef.current.style.height = '0px';
      const { scrollHeight } = textareaRef.current;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };
  const textareaClassName = cx(classes.textarea, {
    [classes.textarea__singleline]: !multiline,
  });

  return (
    <div>
      <textarea
        name={name}
        className={textareaClassName}
        value={value}
        onChange={handleChange}
        ref={textareaRef}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        maxLength={1000}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !multiline) e.preventDefault();
        }}
      />
    </div>
  );
}
