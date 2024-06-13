import { Meta, StoryObj } from '@storybook/react';

import { StatusIcon } from './StatusIcon';

const meta: Meta<typeof StatusIcon> = {
  title: 'Atoms/Icons/StatusIcon',
  component: StatusIcon,
};

export default meta;

type Story = StoryObj<typeof StatusIcon>;

export const Default: Story = {
  args: {
    status: 'finished',
  },
};
