import { Meta, StoryObj } from '@storybook/react';

import { Icon24PxWithLabel } from './Icon24PxWithLabel';

const meta: Meta<typeof Icon24PxWithLabel> = {
  title: 'Atoms/Icons/Icon24PxWithLabel',
  component: Icon24PxWithLabel,
};

export default meta;

type Story = StoryObj<typeof Icon24PxWithLabel>;

export const Default: Story = {
  args: {
    iconName: 'home',
    label: 'Главная',
    color: 'gray20',
  },
};
