import { StoryObj, Meta } from '@storybook/react';

import { About } from '@/components/UI/organisms/Country/About';
import { countries } from '@/components/UI/organisms/Country/config';

const meta: Meta<typeof About> = {
  title: 'organisms/country/About',
  component: About,
};

export default meta;

type Story = StoryObj<typeof About>;

export const Default: Story = {
  args: {
    aboutCountry: countries[0].about,
  },
};
