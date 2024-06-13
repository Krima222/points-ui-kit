import React, { ComponentProps } from 'react';

import cx from 'clsx';

import type { TextVariant, TextElement, TextColor } from './types';

import classes from './Text.module.scss';

interface IProps<E extends TextElement = 'span'> {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: E;
  className?: string;
  maxLines?: number;
  color?: TextColor;
}

type TextProps<E extends TextElement> = IProps<E> &
  Omit<ComponentProps<E>, keyof IProps<E>>;

export function Text<E extends TextElement = 'span'>({
  variant = 'pill',
  color = 'black',
  as,
  children,
  className,
  maxLines,
  ...props
}: TextProps<E>) {
  const inlineStyle = maxLines && {
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    overflow: 'hidden',
  };

  return React.createElement(
    as ?? 'span',
    {
      ...props,
      style: inlineStyle,
      className: cx(classes.text, classes[variant], classes[color], className),
    },
    children,
  );
}
