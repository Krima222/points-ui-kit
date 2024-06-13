import React from 'react';

import { useController, UseControllerProps } from 'react-hook-form';

import { FormInput } from '@/common/hooks/FormInput';
import { IFormField } from '@/common/types/formTypes';
import { FieldBackground } from '@/components/UI/atoms/FieldBackground';
import { Icon24Px } from '@/components/UI/atoms/Icon24Px';
import { Text } from '@/components/UI/atoms/Text';

import classes from './OnBoardingFormField.module.scss';

interface IProps {
  isSubfield: boolean;
  formField: IFormField;
  controls: Omit<UseControllerProps, 'name'>;
  // register: UseFormRegister<any>;
}

export function OnBoardingFormField({
  isSubfield,
  formField,
  controls,
}: IProps) {
  const { name, label, childrenFields, params } = formField;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control: controls.control,
  });

  const formFieldComponent = FormInput(formField, controls);
  const newField = (
    <>
      {formFieldComponent}
      <Text>{label}</Text>
    </>
  );

  const details =
    childrenFields && childrenFields.length
      ? childrenFields.map((childrenField) => (
          <div className={classes.field__details} key={childrenField.params.id}>
            <OnBoardingFormField
              isSubfield
              formField={childrenField}
              controls={controls}
            />

            {childrenField.required && (
              <div className={classes.field__details_notification}>
                <Icon24Px name="info" color="blue" />

                <Text variant="small">
                  {error ? error.message : 'Обязательно к заполнению'}
                </Text>
              </div>
            )}
          </div>
        ))
      : [];

  return (
    <FieldBackground
      field={newField}
      details={field.value === params.stringValue ? details : []}
      variant={isSubfield ? 'subfield' : 'field'}
      fieldClassName={isSubfield ? classes.field__subField : classes.field}
    />
  );
}
