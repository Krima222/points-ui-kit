import { useController, UseControllerProps } from 'react-hook-form';

import { FieldBackground } from '@/components/UI/atoms/FieldBackground';
import { PlusMinus } from '@/components/UI/atoms/PlusMinus';
import { Text } from '@/components/UI/atoms/Text';

import type { ICountOptions } from '../types';

interface IProps {
  options: Omit<ICountOptions, 'type'>;
  controls: Omit<UseControllerProps, 'name'>;
}

export function CountField({ options, controls }: IProps) {
  const { field } = useController({
    name: options.name,
    control: controls.control,
  });

  return (
    <FieldBackground
      field={
        <>
          <Text variant="large">{options.label}</Text>
          <PlusMinus
            name={options.name}
            value={(field.value ?? 0) as number}
            onChange={field.onChange}
          />
        </>
      }
    />
  );
}
