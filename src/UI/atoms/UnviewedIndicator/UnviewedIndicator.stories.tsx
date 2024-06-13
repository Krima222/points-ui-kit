import { Meta, StoryObj } from '@storybook/react';

import { UnviewedIndicator } from './UnviewedIndicator';

const meta: Meta<typeof UnviewedIndicator> = {
  title: 'Atoms/Data display/UnviewedIndicator',
  component: UnviewedIndicator,
};

export default meta;

type Story = StoryObj<typeof UnviewedIndicator>;

export const Default: Story = {
  args: {
    active: true,
    children: (
      <div style={{ width: 100, height: 100, backgroundColor: 'steelblue' }}>
        some content
      </div>
    ),
  },
};
