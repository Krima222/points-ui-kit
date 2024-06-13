import { StoryObj, Meta } from '@storybook/react';

import { ResidencePermitInfo } from '@/components/UI/organisms/ResidencePermitInfo';
import { residencePermitInfo } from '@/components/UI/organisms/ResidencePermitInfo/config';

const meta: Meta<typeof ResidencePermitInfo> = {
  title: 'organisms/ResidencePermitInfo',
  component: ResidencePermitInfo,
};

export default meta;

type Story = StoryObj<typeof ResidencePermitInfo>;

export const Default: Story = {
  args: {
    residencePermit: residencePermitInfo[0],
  },
};
