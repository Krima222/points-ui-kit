import { Meta, StoryObj } from '@storybook/react';

import { ResidencePermit } from '@/components/UI/organisms/Country/ResidencePermit';
import { countries } from '@/components/UI/organisms/Country/config';

const meta: Meta<typeof ResidencePermit> = {
  title: 'organisms/country/ResidencePermit',
  component: ResidencePermit,
};

export default meta;

type Story = StoryObj<typeof ResidencePermit>;

export const Default: Story = {
  args: {
    residencePermitCard: countries[0].residencePermits[0],
  },
};
