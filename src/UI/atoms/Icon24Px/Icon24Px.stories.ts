import { Meta, StoryObj } from '@storybook/react';

import { Icon24Px } from './Icon24Px';

const meta: Meta<typeof Icon24Px> = {
  title: 'Atoms/Icons/Icon24Px',
  component: Icon24Px,
};

export default meta;

type Story = StoryObj<typeof Icon24Px>;

export const Default: Story = {
  args: {
    name: 'arrowBack',
  },
};
