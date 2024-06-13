import { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Organisms/Menu',
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
