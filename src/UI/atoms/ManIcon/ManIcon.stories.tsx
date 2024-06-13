import { StoryObj, Meta } from '@storybook/react';

import { ManIcon } from './ManIcon';

const meta: Meta<typeof ManIcon> = {
  title: 'Atoms/Basic/ManIcon',
  component: ManIcon,
};

export default meta;

type Story = StoryObj<typeof ManIcon>;

export const Default: Story = {
  args: {},
};
