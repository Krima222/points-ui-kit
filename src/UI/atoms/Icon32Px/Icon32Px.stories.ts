import { Meta, StoryObj } from '@storybook/react';

import { Icon32Px } from './Icon32Px';

const meta: Meta<typeof Icon32Px> = {
  title: 'Atoms/Icons/Icon32Px',
  component: Icon32Px,
};

export default meta;

type Story = StoryObj<typeof Icon32Px>;

export const Default: Story = {
  args: {
    name: 'arrowBack',
  },
};
