import type { Color } from '@/common/types';

export type TextElement =
  | 'p'
  | 'span'
  | 'a'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'div'
  | 'label';

export type TextVariant =
  | 'pill'
  | 'menu'
  | 'button'
  | 'small'
  | 'middle'
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4';

export type TextColor = Extract<
  Color,
  | 'inherit'
  | 'black'
  | 'white'
  | 'gray70'
  | 'gray30'
  | 'gray20'
  | 'ligthBlue'
  | 'blue'
  | 'orange'
  | 'primaryGradient'
>;
