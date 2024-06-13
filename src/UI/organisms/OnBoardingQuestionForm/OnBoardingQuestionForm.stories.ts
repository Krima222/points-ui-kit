import { Meta, StoryObj } from '@storybook/react';

import { OnBoardingQuestionForm } from '@/components/UI/organisms/OnBoardingQuestionForm/OnBoardingQuestionForm';
import { nestedFormQuestionObj } from '@/components/UI/organisms/OnBoardingQuestionForm/config';

const meta: Meta<typeof OnBoardingQuestionForm> = {
  title: 'Organisms/OnBoardingQuestionForm',
  component: OnBoardingQuestionForm,
};

export default meta;

type Story = StoryObj<typeof OnBoardingQuestionForm>;

export const Default: Story = {
  args: {
    formQuestion: nestedFormQuestionObj,
  },
};
