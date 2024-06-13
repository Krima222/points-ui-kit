import React from 'react';

import clsx from 'clsx';

import { Text } from '@/components/UI/atoms/Text';

import classes from './ResidencePermitInfoParameter.module.scss';

interface IProps {
  description: string;
  hasIcon: boolean;
  icon?: string;
  className?: string;
}

export function ResidencePermitInfoParameter({
  description,
  hasIcon,
  icon,
  className,
}: IProps) {
  return (
    <div
      className={clsx(classes.residencePermitInfo, className, {
        [classes.residencePermitInfo__withIcon]: hasIcon && !className,
      })}
    >
      {hasIcon && icon ? (
        <span className={classes.residencePermitInfo__icon}>{icon}</span>
      ) : null}
      <Text
        variant="large"
        as={hasIcon ? 'div' : 'h4'}
        className={classes.residencePermitInfo__text}
      >
        {description}
      </Text>
    </div>
  );
}
