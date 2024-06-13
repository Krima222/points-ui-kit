import { Meta, StoryObj } from '@storybook/react';

import { SubquestState } from './SubquestState';

const meta: Meta<typeof SubquestState> = {
  title: 'Atoms/Other/SubtaskState',
  component: SubquestState,
};

export default meta;

type Story = StoryObj<typeof SubquestState>;

export const Default: Story = {
  args: {
    type: 'actual',
  },
};
