import { StoryObj, Meta } from '@storybook/react';

import { InputDateEntry } from './InputDateEntry';

const meta: Meta<typeof InputDateEntry> = {
  title: 'Molecules/Input/InputDateEntry',
  component: InputDateEntry,
};

export default meta;

type Story = StoryObj<typeof InputDateEntry>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};
