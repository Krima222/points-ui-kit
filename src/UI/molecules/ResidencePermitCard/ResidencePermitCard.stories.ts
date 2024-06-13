import { StoryObj, Meta } from '@storybook/react';

import { ResidencePermitCard } from './ResidencePermitCard';

const meta: Meta<typeof ResidencePermitCard> = {
  title: 'Molecules/Data display/ResidencePermitCard',
  component: ResidencePermitCard,
};

export default meta;

type Story = StoryObj<typeof ResidencePermitCard>;

export const Default: Story = {
  args: {
    title: 'ВНЖ для цифровых кочевников ',
    description: 'Для тех, кто планирует открывать бизнес в новой стране',
    cost: 300,
    amountOfDays: '1 - 3 дня',
    requirements: 'Простые требования к документам',
    details: 'Подробнее о ВНЖ',
  },
};
