import { Meta, StoryObj } from '@storybook/react';

import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Atoms/Data display/Notification',
  component: Notification,
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    text: 'Проверьте правильность почты',
    iconColor: 'red',
  },
};
