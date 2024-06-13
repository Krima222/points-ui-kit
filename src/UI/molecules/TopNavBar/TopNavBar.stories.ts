import { StoryObj, Meta } from '@storybook/react';

import { TopNavBar } from './TopNavBar';

const meta: Meta<typeof TopNavBar> = {
  title: 'Molecules/TopNavBar',
  component: TopNavBar,
};

export default meta;

type Story = StoryObj<typeof TopNavBar>;

export const Default: Story = {
  args: {
    title: 'Переезд',
  },
};
