import { StoryObj, Meta } from '@storybook/react';

import { ResidencePermitInfoParameter } from '@/components/UI/molecules/ResidencePermitInfoParameter';

const meta: Meta<typeof ResidencePermitInfoParameter> = {
  title: 'Molecules/ResidencePermitInfo',
  component: ResidencePermitInfoParameter,
};

export default meta;

type Story = StoryObj<typeof ResidencePermitInfoParameter>;

export const Default: Story = {
  args: {
    description: 'Удаленный доход от $1200',
    hasIcon: false,
  },
};
