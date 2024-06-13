import { Meta, StoryObj } from '@storybook/react';

import { InputText } from './InputText';

const meta: Meta<typeof InputText> = {
  title: 'molecules/Input/InputText',
  component: InputText,
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    id: '1',
    type: 'text',
    label: 'Label',
    placeholder: 'Text',
    disabled: false,
    hasError: false,
    errorMessage: 'Error message',
  },
};
