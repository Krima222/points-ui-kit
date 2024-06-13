import { Meta, StoryObj } from '@storybook/react';

import { InputPassword } from './InputPassword';

const meta: Meta<typeof InputPassword> = {
  title: 'molecules/Input/InputPassword',
  component: InputPassword,
};

export default meta;

type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
  args: {
    id: '1',
    label: 'Label',
    placeholder: 'Text',
    disabled: false,
    hasError: false,
    errorMessage: 'errorMessage',
  },
};
