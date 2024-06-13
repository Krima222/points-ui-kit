import { Meta, StoryObj } from '@storybook/react';

import { AboutCountryParameter } from '@/components/UI/molecules/AboutCountryParameter';

const meta: Meta<typeof AboutCountryParameter> = {
  title: 'molecules/AboutCountryParameter',
  component: AboutCountryParameter,
};

export default meta;

type Story = StoryObj<typeof AboutCountryParameter>;

export const Default: Story = {
  args: {
    title: 'Перелет',
    parameter: '600-1000 $',
  },
};
