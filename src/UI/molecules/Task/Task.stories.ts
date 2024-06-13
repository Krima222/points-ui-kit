import { Meta, StoryObj } from '@storybook/react';

import { Task } from '@/components/UI/molecules/Task/Task';

const meta: Meta<typeof Task> = {
  title: 'Molecules/Quest/Task',
  component: Task,
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    status: 'notAvailable',
    title: 'Справка о несудимости',
    onClick: () => console.log('click'),
  },
};
