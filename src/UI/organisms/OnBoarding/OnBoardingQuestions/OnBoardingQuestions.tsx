import React from 'react';

import { IFormQuestion } from '@/common/types/formTypes';
import { OnBoardingQuestionForm } from '@/components/UI/organisms/OnBoardingQuestionForm';

import classes from './OnBoardingQuestions.module.scss';

interface IProps {
  formQuestion: IFormQuestion;
  formAdditionalHandleSubmit?: () => void;
}

export function OnBoardingQuestions({
  formQuestion,
  formAdditionalHandleSubmit,
}: IProps) {
  return (
    <div className={classes.onBoardingQuestions}>
      <OnBoardingQuestionForm
        formQuestion={formQuestion}
        formAdditionalHandleSubmit={formAdditionalHandleSubmit}
      />
    </div>
  );
}
