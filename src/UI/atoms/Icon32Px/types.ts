import type { Color } from '@/common/types';

import { icons } from './assets';

export type Icon32PxColor = Extract<
  Color,
  | 'inherit'
  | 'black'
  | 'white'
  | 'gray90'
  | 'gray70'
  | 'gray30'
  | 'blue'
  | 'red'
  | 'primaryGradient'
>;

export type Icon32PxName = keyof typeof icons;
