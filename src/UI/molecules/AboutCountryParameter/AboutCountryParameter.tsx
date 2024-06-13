import React from 'react';

import { Text } from '@/components/UI/atoms/Text';

import classes from './AboutCountryParameter.module.scss';

interface IProps {
  title: string;
  parameter: string;
}

export function AboutCountryParameter({ title, parameter }: IProps) {
  return (
    <div className={classes.aboutCountryParameter}>
      <Text variant="large">{title}</Text>
      <Text as="h4">{parameter}</Text>
    </div>
  );
}
