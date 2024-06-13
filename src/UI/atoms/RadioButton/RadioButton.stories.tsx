import { StoryObj, Meta } from '@storybook/react';

import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/Inputs/RadioButton',
  component: RadioButton,
  parameters: {
    backgrounds: { default: 'white' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};
