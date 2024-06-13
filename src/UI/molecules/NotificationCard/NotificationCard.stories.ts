import { StoryObj, Meta } from '@storybook/react';

import { NotificationCard } from './NotificationCard';

const meta: Meta<typeof NotificationCard> = {
  title: 'Molecules/Data display/NotificationCard',
  component: NotificationCard,
};

export default meta;

type Story = StoryObj<typeof NotificationCard>;

export const Default: Story = {
  args: {
    status: 'inProcess',
    title: 'Документ заполенен неверно',
    description: 'Необходимо дождаться завершения процесса обработки',
  },
};
