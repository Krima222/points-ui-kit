import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { IFormQuestion } from '@/common/types/formTypes';
import { Button } from '@/components/UI/atoms/Button';
import { Text } from '@/components/UI/atoms/Text';
import { OnBoardingFormField } from '@/components/UI/molecules/OnBoardingFormField';

import classes from './OnBoardingQuestionForm.module.scss';

interface IProps {
  formQuestion: IFormQuestion;
  formAdditionalHandleSubmit?: () => void;
}

export function OnBoardingQuestionForm({
  formQuestion,
  formAdditionalHandleSubmit,
}: IProps) {
  const useFormMethods = useForm();

  const {
    control,
    getValues,
    formState: { errors, isDirty },
  } = useFormMethods;

  const formFields = formQuestion.answers.map((formField) => (
    <OnBoardingFormField
      key={formField.id}
      isSubfield={false}
      formField={formField}
      controls={{ control }}
    />
  ));

  const formHandleSubmit = () => {
    console.log(getValues());
    if (formAdditionalHandleSubmit) {
      formAdditionalHandleSubmit();
    }
  };

  return (
    <FormProvider {...useFormMethods}>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          formHandleSubmit();
        }}
        className={classes.form}
      >
        <div className={classes.form__content}>
          <Text as="h2" variant="h2">
            {formQuestion.title}
          </Text>

          <div className={classes.form__fields}>{formFields}</div>
        </div>

        <div className={classes.form__button}>
          <Button
            text="Далее"
            type="submit"
            disabled={!isDirty || !!Object.keys(errors).length}
          />
        </div>
      </form>
    </FormProvider>
  );
}
