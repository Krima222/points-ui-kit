import { useController, UseControllerProps } from 'react-hook-form';

import { FieldBackground } from '@/components/UI/atoms/FieldBackground';
import { RadioButton } from '@/components/UI/atoms/RadioButton';
import { Text } from '@/components/UI/atoms/Text';

import type { IRadioOptions } from '../types';

import classes from './RadioField.module.scss';

interface IProps {
  options: Omit<IRadioOptions, 'type'>;
  controls: Omit<UseControllerProps, 'name'>;
}

export function RadioField({ options, controls }: IProps) {
  const { field } = useController({
    name: options.name,
    control: controls.control,
  });

  return (
    <FieldBackground
      fieldClassName={classes.wrapper}
      field={
        <>
          <RadioButton
            name={options.name}
            value={options.value}
            onChange={field.onChange}
            checked={field.value === options.value}
          />
          <Text variant="large">{options.label}</Text>
        </>
      }
    />
  );
}
