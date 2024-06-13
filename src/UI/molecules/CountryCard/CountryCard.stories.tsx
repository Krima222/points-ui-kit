import { StoryObj, Meta } from '@storybook/react';

import { CountryCard } from './CountryCard';
import imgD from './img.jpg';

const meta: Meta<typeof CountryCard> = {
  title: 'Molecules/Data display/CountryCard',
  component: CountryCard,
};

export default meta;

type Story = StoryObj<typeof CountryCard>;

export const Default: Story = {
  args: {
    country: 'Черногория',
    rent: 700,
    weather: '+7/+27',
    food: 600,
    img: imgD.src,
  },
};
