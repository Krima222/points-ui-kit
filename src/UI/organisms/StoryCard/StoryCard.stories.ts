import { Meta, StoryObj } from '@storybook/react';

import { StoryCard } from './StoryCard';

const meta: Meta<typeof StoryCard> = {
  title: 'Organisms/StoryCard',
  component: StoryCard,
};

export default meta;

type Story = StoryObj<typeof StoryCard>;

export const Default: Story = {
  args: {
    unviewed: true,
    img: '/images/storyImg1.jpg',
  },
};
