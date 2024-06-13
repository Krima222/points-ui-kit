import { StoryObj, Meta } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    text: 'Switch',
    selected: true,
  },
};
