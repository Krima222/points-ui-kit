import { Meta, StoryObj } from '@storybook/react';

import { InputWrapper } from './InputWrapper';

const meta: Meta<typeof InputWrapper> = {
  title: 'molecules/Input/InputWrapper',
  component: InputWrapper,
};

export default meta;

type Story = StoryObj<typeof InputWrapper>;

export const Default: Story = {
  args: {
    children: [],
  },
};
