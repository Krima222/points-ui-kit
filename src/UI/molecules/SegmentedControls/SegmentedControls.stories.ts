import { StoryObj, Meta } from '@storybook/react';

import { SegmentedControls } from './SegmentedControls';

const meta: Meta<typeof SegmentedControls> = {
  title: 'Molecules/SegmentedControls',
  component: SegmentedControls,
};

export default meta;

type Story = StoryObj<typeof SegmentedControls>;

export const Default: Story = {
  args: {
    option1Text: 'Active',
    option2Text: 'Disable',
  },
};
