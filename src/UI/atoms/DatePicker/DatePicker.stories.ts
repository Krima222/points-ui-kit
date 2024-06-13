import { StoryObj, Meta } from '@storybook/react';

import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Atoms/Inputs/DatePicker',
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};
