import { Meta, StoryObj } from '@storybook/react';

import { InputLabel } from './InputLabel';

const meta: Meta<typeof InputLabel> = {
  title: 'Atoms/Inputs/InputLabel',
  component: InputLabel,
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    text: 'label',
  },
};
