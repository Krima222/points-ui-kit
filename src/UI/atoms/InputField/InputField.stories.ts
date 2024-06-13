import { Meta, StoryObj } from '@storybook/react';

import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Atoms/Inputs/InputField',
  component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    id: '0',
    type: 'text',
  },
};
