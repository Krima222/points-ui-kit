import cx from 'clsx';

import { icons, gradients } from './assets';

import type { Icon32PxColor, Icon32PxName } from './types';

import classes from './Icon32Px.module.scss';

interface IProps {
  name: Icon32PxName;
  color?: Icon32PxColor;
}

export function Icon32Px({ name, color = 'gray90' }: IProps) {
  const gradient = getGradient(color);
  return (
    <div className={cx(classes.icon, classes[color])}>
      {icons[name](gradient)}
    </div>
  );
}

function getGradient(color: string) {
  const gradient = {
    primaryGradient: gradients.primary,
  }[color];

  if (gradient) {
    return gradient();
  }

  return undefined;
}
