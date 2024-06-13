import { StoryObj, Meta } from '@storybook/react';

import { Country } from '@/components/UI/organisms/Country/Country';

const meta: Meta<typeof Country> = {
  title: 'organisms/country/Main',
  component: Country,
};

export default meta;

type Story = StoryObj<typeof Country>;

export const Default: Story = {
  args: {
    id: 'montenegro',
  },
};
