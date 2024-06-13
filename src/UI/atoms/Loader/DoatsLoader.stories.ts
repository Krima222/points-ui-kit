import { StoryObj, Meta } from '@storybook/react';

import { DoatsLoader } from './DoatsLoader';

const meta: Meta<typeof DoatsLoader> = {
  title: 'Atoms/DoatsLoader',
  component: DoatsLoader,
};

export default meta;

type Story = StoryObj<typeof DoatsLoader>;

export const Default: Story = {};
