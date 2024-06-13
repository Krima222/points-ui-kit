import { useForm, type UseControllerProps } from 'react-hook-form';

import { CountField } from './CountField';
import { RadioField } from './RadioField';

import type { DefaultValues, FieldOptionsArray, FieldOptions } from './types';

const fieldsByType = {
  radio: RadioField,
  count: CountField,
} satisfies Record<FieldOptions['type'], any>; // только для проверки правильности ключей

function getField(
  options: FieldOptions,
  controls: Omit<UseControllerProps, 'name'>,
) {
  const Component = fieldsByType[options.type];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Component key={options.id} options={options} controls={controls} />;
}

export function Form<T extends FieldOptionsArray>({
  fields,
  defaultValues,
}: {
  fields: T;
  defaultValues: DefaultValues<T>;
}) {
  const { control } = useForm<any>({ defaultValues }); // здесь тип не имеет никакого смысла

  return <form>{fields.map((field) => getField(field, { control }))}</form>;
}
