import { StoryObj, Meta } from '@storybook/react';

import { pageQuestProgress } from '@/common/mockData/Quests/pageQuestProgress';

import { ActiveQuests } from './ActiveQuests';

const meta: Meta<typeof ActiveQuests> = {
  title: 'Organisms/ActiveQuests',
  component: ActiveQuests,
};

export default meta;

type Story = StoryObj<typeof ActiveQuests>;

export const Default: Story = {
  args: { data: pageQuestProgress },
};
