import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/Data display/ProgressBar',
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 40,
  },
};
