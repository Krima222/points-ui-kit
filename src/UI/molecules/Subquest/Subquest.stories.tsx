import { Meta, StoryObj } from '@storybook/react';

import { SubquestState } from '../../atoms/SubquestState';

import { Subquest } from './Subquest';

const meta: Meta<typeof Subquest> = {
  title: 'Molecules/Quest/Subquest',
  component: Subquest,
};

export default meta;

type Story = StoryObj<typeof Subquest>;

export const Default: Story = {
  args: {
    title: 'Подготовка документов к переезду',
    state: <SubquestState type="unavailable" />,
    onClick: () => console.log('click'),
  },
};
