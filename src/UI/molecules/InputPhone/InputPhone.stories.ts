import { Meta, StoryObj } from '@storybook/react';

import { InputPhone } from './InputPhone';

const meta: Meta<typeof InputPhone> = {
  title: 'molecules/Input/InputPhone',
  component: InputPhone,
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

export const Default: Story = {
  args: {
    id: '1',
    label: 'Номер телефона',
    disabled: false,
    hasError: false,
    errorMessage: 'Error message',
  },
};
